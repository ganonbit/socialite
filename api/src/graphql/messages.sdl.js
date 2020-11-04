export const schema = gql`
  type Message {
    id: String!
    createdAt: DateTime!
    state: ContentState!
    content: String!
    sentBy: User
    sentById: String
    channel: Channel
    channelId: String
  }

  enum ContentState {
    UNPUBLISHED
    PUBLISHED
    DRAFT
    FLAGGED
    DISABLED
    DELETED
  }

  type Query {
    messages: [Message!]!
    message(id: String!): Message
  }

  input CreateMessageInput {
    state: ContentState!
    content: String!
    sentById: String
    channelId: String
  }

  input UpdateMessageInput {
    state: ContentState
    content: String
    sentById: String
    channelId: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message!
    updateMessage(id: String!, input: UpdateMessageInput!): Message!
    deleteMessage(id: String!): Message!
  }
`;
