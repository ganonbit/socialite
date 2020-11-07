import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import MessageForm from 'src/components/MessageForm';

export const QUERY = gql`
  query FIND_MESSAGE_BY_ID($id: String!) {
    message: message(id: $id) {
      id
      createdAt
      updatedAt
      state
      content
      sentById
      channelId
    }
  }
`;
const UPDATE_MESSAGE_MUTATION = gql`
  mutation UpdateMessageMutation($id: String!, $input: UpdateMessageInput!) {
    updateMessage(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      state
      content
      sentById
      channelId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ message }) => {
  const { addMessage } = useFlash();
  const [updateMessage, { loading, error }] = useMutation(UPDATE_MESSAGE_MUTATION, {
    onCompleted: () => {
      navigate(routes.messages());
      addMessage('Message updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    updateMessage({ variables: { id, input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>Edit Message {message.id}</h2>
      </header>
      <div className='rw-segment-main'>
        <MessageForm message={message} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
