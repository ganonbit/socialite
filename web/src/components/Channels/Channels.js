import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/ChannelsCell';

const DELETE_CHANNEL_MUTATION = gql`
  mutation DeleteChannelMutation($id: String!) {
    deleteChannel(id: $id) {
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

const ChannelsList = ({ channels }) => {
  const { addMessage } = useFlash();
  const [deleteChannel] = useMutation(DELETE_CHANNEL_MUTATION, {
    onCompleted: () => {
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
    <div className='rw-segment rw-table-wrapper-responsive'>
      <table className='rw-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id}>
              <td>{truncate(channel.id)}</td>
              <td>{truncate(channel.title)}</td>
              <td>{timeTag(channel.createdAt)}</td>
              <td>
                <nav className='rw-table-actions'>
                  <Link
                    to={routes.channel({ id: channel.id })}
                    title={'Show channel ' + channel.id + ' detail'}
                    className='rw-button rw-button-small'>
                    Show
                  </Link>
                  <Link
                    to={routes.editChannel({ id: channel.id })}
                    title={'Edit channel ' + channel.id}
                    className='rw-button rw-button-small rw-button-blue'>
                    Edit
                  </Link>
                  <a
                    href='#'
                    title={'Delete channel ' + channel.id}
                    className='rw-button rw-button-small rw-button-red'
                    onClick={() => onDeleteClick(channel.id)}>
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

export default ChannelsList;
