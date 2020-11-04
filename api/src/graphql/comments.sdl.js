export const schema = gql`
  type Comment {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    state: ContentState!
    content: String!
    sentBy: User
    sentById: String
    post: Post
    postId: Int
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
    comments: [Comment!]!
    comment(id: String!): Comment
  }

  input CreateCommentInput {
    state: ContentState!
    content: String!
    sentById: String
    postId: Int
  }

  input UpdateCommentInput {
    state: ContentState
    content: String
    sentById: String
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(id: String!, input: UpdateCommentInput!): Comment!
    deleteComment(id: String!): Comment!
  }
`;
