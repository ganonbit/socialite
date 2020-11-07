import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/MessagesCell';

const DELETE_MESSAGE_MUTATION = gql`
  mutation DeleteMessageMutation($id: String!) {
    deleteMessage(id: $id) {
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

const MessagesList = ({ messages }) => {
  const { addMessage } = useFlash();
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION, {
    onCompleted: () => {
      addMessage('Message deleted.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete message ' + id + '?')) {
      deleteMessage({ variables: { id } });
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
            <th>Channel id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{truncate(message.id)}</td>
              <td>{timeTag(message.createdAt)}</td>
              <td>{timeTag(message.updatedAt)}</td>
              <td>{truncate(message.state)}</td>
              <td>{truncate(message.content)}</td>
              <td>{truncate(message.sentById)}</td>
              <td>{truncate(message.channelId)}</td>
              <td>
                <nav className='rw-table-actions'>
                  <Link
                    to={routes.message({ id: message.id })}
                    title={'Show message ' + message.id + ' detail'}
                    className='rw-button rw-button-small'>
                    Show
                  </Link>
                  <Link
                    to={routes.editMessage({ id: message.id })}
                    title={'Edit message ' + message.id}
                    className='rw-button rw-button-small rw-button-blue'>
                    Edit
                  </Link>
                  <a
                    href='#'
                    title={'Delete message ' + message.id}
                    className='rw-button rw-button-small rw-button-red'
                    onClick={() => onDeleteClick(message.id)}>
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

export default MessagesList;
