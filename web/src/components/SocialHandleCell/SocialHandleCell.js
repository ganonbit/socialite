import SocialHandle from 'src/components/SocialHandle';

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>SocialHandle not found</div>;

export const Success = ({ socialHandle }) => {
  return <SocialHandle socialHandle={socialHandle} />;
};
