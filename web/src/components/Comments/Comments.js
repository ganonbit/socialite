import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/CommentsCell';

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: String!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type='checkbox' checked={checked} disabled />;
};

const CommentsList = ({ comments }) => {
  const { addMessage } = useFlash();
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      addMessage('Comment deleted.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete comment ' + id + '?')) {
      deleteComment({ variables: { id } });
    }
  };

  return (
    <div className='rw-segment rw-table-wrapper-responsive'>
      <table className='rw-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>State</th>
            <th>Content</th>
            <th>Sent by id</th>
            <th>Post id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{truncate(comment.id)}</td>
              <td>{timeTag(comment.createdAt)}</td>
              <td>{timeTag(comment.updatedAt)}</td>
              <td>{truncate(comment.state)}</td>
              <td>{truncate(comment.content)}</td>
              <td>{truncate(comment.sentById)}</td>
              <td>{truncate(comment.postId)}</td>
              <td>
                <nav className='rw-table-actions'>
                  <Link
                    to={routes.comment({ id: comment.id })}
                    title={'Show comment ' + comment.id + ' detail'}
                    className='rw-button rw-button-small'>
                    Show
                  </Link>
                  <Link
                    to={routes.editComment({ id: comment.id })}
                    title={'Edit comment ' + comment.id}
                    className='rw-button rw-button-small rw-button-blue'>
                    Edit
                  </Link>
                  <a
                    href='#'
                    title={'Delete comment ' + comment.id}
                    className='rw-button rw-button-small rw-button-red'
                    onClick={() => onDeleteClick(comment.id)}>
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsList;
