import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import ChannelForm from 'src/components/ChannelForm';

export const QUERY = gql`
  query FIND_CHANNEL_BY_ID($id: String!) {
    channel: channel(id: $id) {
      id
      title
      createdAt
    }
  }
`;
const UPDATE_CHANNEL_MUTATION = gql`
  mutation UpdateChannelMutation($id: String!, $input: UpdateChannelInput!) {
    updateChannel(id: $id, input: $input) {
      id
      title
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ channel }) => {
  const { addMessage } = useFlash();
  const [updateChannel, { loading, error }] = useMutation(UPDATE_CHANNEL_MUTATION, {
    onCompleted: () => {
      navigate(routes.channels());
      addMessage('Channel updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    updateChannel({ variables: { id, input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>Edit Channel {channel.id}</h2>
      </header>
      <div className='rw-segment-main'>
        <ChannelForm channel={channel} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
