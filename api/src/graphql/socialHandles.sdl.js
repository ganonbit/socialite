export const schema = gql`
  type SocialHandle {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    username: String!
    provider: [Social]!
    user: User
    userId: String
  }

  enum Social {
    FACEBOOK
    TWITTER
    DEVTO
    LINKEDIN
    YOUTUBE
    PERSONAL
    OTHER
  }

  type Query {
    socialHandles: [SocialHandle!]!
    socialHandle(id: Int!): SocialHandle
  }

  input CreateSocialHandleInput {
    username: String!
    provider: [Social]!
    userId: String
  }

  input UpdateSocialHandleInput {
    username: String
    provider: [Social]!
    userId: String
  }

  type Mutation {
    createSocialHandle(input: CreateSocialHandleInput!): SocialHandle!
    updateSocialHandle(id: Int!, input: UpdateSocialHandleInput!): SocialHandle!
    deleteSocialHandle(id: Int!): SocialHandle!
  }
`;
