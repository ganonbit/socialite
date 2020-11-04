export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    state: ContentState!
    title: String!
    content: String!
    image: String
    url: String!
    author: User
    authorId: String
    comments: [Comment]!
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
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    state: ContentState!
    title: String!
    content: String!
    image: String
    url: String!
    authorId: String
  }

  input UpdatePostInput {
    state: ContentState
    title: String
    content: String
    image: String
    url: String
    authorId: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`;
