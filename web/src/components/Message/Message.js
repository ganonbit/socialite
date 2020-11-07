import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

import { QUERY } from 'src/components/MessagesCell';

const DELETE_MESSAGE_MUTATION = gql`
  mutation DeleteMessageMutation($id: String!) {
    deleteMessage(id: $id) {
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

const Message = ({ message }) => {
  const { addMessage } = useFlash();
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION, {
    onCompleted: () => {
      navigate(routes.messages());
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
    <>
      <div className='rw-segment'>
        <header className='rw-segment-header'>
          <h2 className='rw-heading rw-heading-secondary'>Message {message.id} Detail</h2>
        </header>
        <table className='rw-table'>
          <tbody>
            <tr>
              <th>Id</th>
              <td>{message.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(message.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(message.updatedAt)}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{message.state}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{message.content}</td>
            </tr>
            <tr>
              <th>Sent by id</th>
              <td>{message.sentById}</td>
            </tr>
            <tr>
              <th>Channel id</th>
              <td>{message.channelId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className='rw-button-group'>
        <Link to={routes.editMessage({ id: message.id })} className='rw-button rw-button-blue'>
          Edit
        </Link>
        <a href='#' className='rw-button rw-button-red' onClick={() => onDeleteClick(message.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Message;
