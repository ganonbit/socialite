export const schema = gql`
  type Channel {
    id: String!
    title: String!
    users: [User]!
    messages: [Message]!
    createdAt: DateTime!
  }

  type Query {
    channels: [Channel!]!
    channel(id: String!): Channel
  }

  input CreateChannelInput {
    title: String!
  }

  input UpdateChannelInput {
    title: String
  }

  type Mutation {
    createChannel(input: CreateChannelInput!): Channel!
    updateChannel(id: String!, input: UpdateChannelInput!): Channel!
    deleteChannel(id: String!): Channel!
  }
`;
