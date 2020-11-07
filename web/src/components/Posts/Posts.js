import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/PostsCell';

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
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

const PostsList = ({ posts }) => {
  const { addMessage } = useFlash();
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      addMessage('Post deleted.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } });
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
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
            <th>Slug</th>
            <th>Author id</th>
            <th>Metadata</th>
            <th>Is featured</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{truncate(post.id)}</td>
              <td>{timeTag(post.createdAt)}</td>
              <td>{timeTag(post.updatedAt)}</td>
              <td>{truncate(post.state)}</td>
              <td>{truncate(post.title)}</td>
              <td>{truncate(post.content)}</td>
              <td>{truncate(post.image)}</td>
              <td>{truncate(post.slug)}</td>
              <td>{truncate(post.authorId)}</td>
              <td>{jsonTruncate(post.metadata)}</td>
              <td>{checkboxInputTag(post.isFeatured)}</td>
              <td>
                <nav className='rw-table-actions'>
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    className='rw-button rw-button-small'>
                    Show
                  </Link>
                  <Link
                    to={routes.editPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    className='rw-button rw-button-small rw-button-blue'>
                    Edit
                  </Link>
                  <a
                    href='#'
                    title={'Delete post ' + post.id}
                    className='rw-button rw-button-small rw-button-red'
                    onClick={() => onDeleteClick(post.id)}>
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

export default PostsList;
