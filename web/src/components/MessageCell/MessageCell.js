import Message from 'src/components/Message';

export const QUERY = gql`
  query FIND_MESSAGE_BY_ID($id: String!) {
    message: message(id: $id) {
      id
      createdAt
      state
      content
      sentById
      channelId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Message not found</div>;

export const Success = ({ message }) => {
  return <Message message={message} />;
};
