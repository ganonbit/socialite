import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

import { QUERY } from 'src/components/ChannelsCell';

const DELETE_CHANNEL_MUTATION = gql`
  mutation DeleteChannelMutation($id: String!) {
    deleteChannel(id: $id) {
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

const Channel = ({ channel }) => {
  const { addMessage } = useFlash();
  const [deleteChannel] = useMutation(DELETE_CHANNEL_MUTATION, {
    onCompleted: () => {
      navigate(routes.channels());
      addMessage('Channel deleted.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete channel ' + id + '?')) {
      deleteChannel({ variables: { id } });
    }
  };

  return (
    <>
      <div className='rw-segment'>
        <header className='rw-segment-header'>
          <h2 className='rw-heading rw-heading-secondary'>Channel {channel.id} Detail</h2>
        </header>
        <table className='rw-table'>
          <tbody>
            <tr>
              <th>Id</th>
              <td>{channel.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{channel.title}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(channel.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className='rw-button-group'>
        <Link to={routes.editChannel({ id: channel.id })} className='rw-button rw-button-blue'>
          Edit
        </Link>
        <a href='#' className='rw-button rw-button-red' onClick={() => onDeleteClick(channel.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Channel;
