import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/SocialHandlesCell';

const DELETE_SOCIAL_HANDLE_MUTATION = gql`
  mutation DeleteSocialHandleMutation($id: Int!) {
    deleteSocialHandle(id: $id) {
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

const SocialHandlesList = ({ socialHandles }) => {
  const { addMessage } = useFlash();
  const [deleteSocialHandle] = useMutation(DELETE_SOCIAL_HANDLE_MUTATION, {
    onCompleted: () => {
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
    <div className='rw-segment rw-table-wrapper-responsive'>
      <table className='rw-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Username</th>
            <th>Provider</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {socialHandles.map((socialHandle) => (
            <tr key={socialHandle.id}>
              <td>{truncate(socialHandle.id)}</td>
              <td>{timeTag(socialHandle.createdAt)}</td>
              <td>{timeTag(socialHandle.updatedAt)}</td>
              <td>{truncate(socialHandle.username)}</td>
              <td>{truncate(socialHandle.provider)}</td>
              <td>{truncate(socialHandle.userId)}</td>
              <td>
                <nav className='rw-table-actions'>
                  <Link
                    to={routes.socialHandle({ id: socialHandle.id })}
                    title={'Show socialHandle ' + socialHandle.id + ' detail'}
                    className='rw-button rw-button-small'>
                    Show
                  </Link>
                  <Link
                    to={routes.editSocialHandle({ id: socialHandle.id })}
                    title={'Edit socialHandle ' + socialHandle.id}
                    className='rw-button rw-button-small rw-button-blue'>
                    Edit
                  </Link>
                  <a
                    href='#'
                    title={'Delete socialHandle ' + socialHandle.id}
                    className='rw-button rw-button-small rw-button-red'
                    onClick={() => onDeleteClick(socialHandle.id)}>
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

export default SocialHandlesList;
