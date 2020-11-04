import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import MessageForm from 'src/components/MessageForm';

import { QUERY } from 'src/components/MessagesCell';

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`;

const NewMessage = () => {
  const { addMessage } = useFlash();
  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE_MUTATION, {
    onCompleted: () => {
      navigate(routes.messages());
      addMessage('Message created.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    createMessage({ variables: { input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>New Message</h2>
      </header>
      <div className='rw-segment-main'>
        <MessageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewMessage;
