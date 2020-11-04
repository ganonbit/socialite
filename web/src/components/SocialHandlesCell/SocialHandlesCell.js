import { Link, routes } from '@redwoodjs/router';

import SocialHandles from 'src/components/SocialHandles';

export const QUERY = gql`
  query SOCIAL_HANDLES {
    socialHandles {
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

export const Empty = () => {
  return (
    <div className='rw-text-center'>
      {'No socialHandles yet. '}
      <Link to={routes.newSocialHandle()} className='rw-link'>
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ socialHandles }) => {
  return <SocialHandles socialHandles={socialHandles} />;
};
