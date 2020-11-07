import { Link, routes } from '@redwoodjs/router';

import Messages from 'src/components/Messages';

export const QUERY = gql`
  query MESSAGES {
    messages {
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

export const Empty = () => {
  return (
    <div className='rw-text-center'>
      {'No messages yet. '}
      <Link to={routes.newMessage()} className='rw-link'>
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ messages }) => {
  return <Messages messages={messages} />;
};
