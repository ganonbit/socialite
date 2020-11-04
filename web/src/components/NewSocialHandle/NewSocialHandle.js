import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import SocialHandleForm from 'src/components/SocialHandleForm';

import { QUERY } from 'src/components/SocialHandlesCell';

const CREATE_SOCIAL_HANDLE_MUTATION = gql`
  mutation CreateSocialHandleMutation($input: CreateSocialHandleInput!) {
    createSocialHandle(input: $input) {
      id
    }
  }
`;

const NewSocialHandle = () => {
  const { addMessage } = useFlash();
  const [createSocialHandle, { loading, error }] = useMutation(CREATE_SOCIAL_HANDLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.socialHandles());
      addMessage('SocialHandle created.', { classes: 'rw-flash-success' });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    createSocialHandle({ variables: { input } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>New SocialHandle</h2>
      </header>
      <div className='rw-segment-main'>
        <SocialHandleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewSocialHandle;
