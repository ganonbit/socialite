export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    state: ContentState!
    title: String!
    content: String!
    image: String
    slug: String
    author: User
    authorId: String
    metadata: JSON!
    isFeatured: Boolean!
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
    slug: String
    authorId: String
    metadata: JSON!
    isFeatured: Boolean!
  }

  input UpdatePostInput {
    state: ContentState
    title: String
    content: String
    image: String
    slug: String
    authorId: String
    metadata: JSON
    isFeatured: Boolean
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`;
