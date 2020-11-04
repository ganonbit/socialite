import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import ChannelForm from 'src/components/ChannelForm';

import { QUERY } from 'src/components/ChannelsCell';

const CREATE_CHANNEL_MUTATION = gql`
  mutation CreateChannelMutation($input: CreateChannelInput!) {
    createChannel(input: $input) {
      id
    }
  }
`;

const NewChannel = () => {
  const { addMessage } = useFlash();
  const [createChannel, { loading, error }] = useMutation(CREATE_CHANNEL_MUTATION, {
    onCompleted: () => {
      navigate(routes.channels());
      addMessage('Channel created.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    createChannel({ variables: { input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>New Channel</h2>
      </header>
      <div className='rw-segment-main'>
        <ChannelForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewChannel;
