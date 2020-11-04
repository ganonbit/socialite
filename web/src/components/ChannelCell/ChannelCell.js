import Channel from 'src/components/Channel';

export const QUERY = gql`
  query FIND_CHANNEL_BY_ID($id: String!) {
    channel: channel(id: $id) {
      id
      title
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Channel not found</div>;

export const Success = ({ channel }) => {
  return <Channel channel={channel} />;
};
