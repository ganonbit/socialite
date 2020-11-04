import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

import { QUERY } from 'src/components/CommentsCell';

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: String!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
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

const Comment = ({ comment }) => {
  const { addMessage } = useFlash();
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.comments());
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
    <>
      <div className='rw-segment'>
        <header className='rw-segment-header'>
          <h2 className='rw-heading rw-heading-secondary'>Comment {comment.id} Detail</h2>
        </header>
        <table className='rw-table'>
          <tbody>
            <tr>
              <th>Id</th>
              <td>{comment.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(comment.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(comment.updatedAt)}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{comment.state}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{comment.content}</td>
            </tr>
            <tr>
              <th>Sent by id</th>
              <td>{comment.sentById}</td>
            </tr>
            <tr>
              <th>Post id</th>
              <td>{comment.postId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className='rw-button-group'>
        <Link to={routes.editComment({ id: comment.id })} className='rw-button rw-button-blue'>
          Edit
        </Link>
        <a href='#' className='rw-button rw-button-red' onClick={() => onDeleteClick(comment.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Comment;
