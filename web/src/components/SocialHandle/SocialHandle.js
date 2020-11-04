import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

import { QUERY } from 'src/components/SocialHandlesCell';

const DELETE_SOCIAL_HANDLE_MUTATION = gql`
  mutation DeleteSocialHandleMutation($id: Int!) {
    deleteSocialHandle(id: $id) {
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

const SocialHandle = ({ socialHandle }) => {
  const { addMessage } = useFlash();
  const [deleteSocialHandle] = useMutation(DELETE_SOCIAL_HANDLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.socialHandles());
      addMessage('SocialHandle deleted.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete socialHandle ' + id + '?')) {
      deleteSocialHandle({ variables: { id } });
    }
  };

  return (
    <>
      <div className='rw-segment'>
        <header className='rw-segment-header'>
          <h2 className='rw-heading rw-heading-secondary'>SocialHandle {socialHandle.id} Detail</h2>
        </header>
        <table className='rw-table'>
          <tbody>
            <tr>
              <th>Id</th>
              <td>{socialHandle.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(socialHandle.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(socialHandle.updatedAt)}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{socialHandle.username}</td>
            </tr>
            <tr>
              <th>Provider</th>
              <td>{socialHandle.provider}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{socialHandle.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className='rw-button-group'>
        <Link to={routes.editSocialHandle({ id: socialHandle.id })} className='rw-button rw-button-blue'>
          Edit
        </Link>
        <a href='#' className='rw-button rw-button-red' onClick={() => onDeleteClick(socialHandle.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default SocialHandle;
