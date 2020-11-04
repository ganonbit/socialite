import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import SocialHandleForm from 'src/components/SocialHandleForm';

export const QUERY = gql`
  query FIND_SOCIAL_HANDLE_BY_ID($id: Int!) {
    socialHandle: socialHandle(id: $id) {
      id
      createdAt
      updatedAt
      username
      provider
      userId
    }
  }
`;
const UPDATE_SOCIAL_HANDLE_MUTATION = gql`
  mutation UpdateSocialHandleMutation($id: Int!, $input: UpdateSocialHandleInput!) {
    updateSocialHandle(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      username
      provider
      userId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ socialHandle }) => {
  const { addMessage } = useFlash();
  const [updateSocialHandle, { loading, error }] = useMutation(UPDATE_SOCIAL_HANDLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.socialHandles());
      addMessage('SocialHandle updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    updateSocialHandle({ variables: { id, input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>Edit SocialHandle {socialHandle.id}</h2>
      </header>
      <div className='rw-segment-main'>
        <SocialHandleForm socialHandle={socialHandle} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
