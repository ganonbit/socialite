import { Link, routes } from '@redwoodjs/router';

import Channels from 'src/components/Channels';

export const QUERY = gql`
  query CHANNELS {
    channels {
      id
      title
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className='rw-text-center'>
      {'No channels yet. '}
      <Link to={routes.newChannel()} className='rw-link'>
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ channels }) => {
  return <Channels channels={channels} />;
};
