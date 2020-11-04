export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    birthday: DateTime
    bio: String
    image: String
    status: UserStatus!
    state: UserState!
    socialHandles: [SocialHandle]!
    role: Role!
    posts: [Post]!
    messages: [Message]!
    channels: [Channel]!
    comments: [Comment]!
  }

  enum UserStatus {
    OFFLINE
    ONLINE
    HIDDEN
    OTHER
  }
  enum UserState {
    UNVERIFIED
    VERIFIED
    SOFT_BAN
    PERMA_BAN
    DISABLED
  }
  enum Role {
    USER
    MODERATOR
    SUPER_MODERATOR
    ADMIN
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    birthday: DateTime
    bio: String
    image: String
    status: UserStatus!
    state: UserState!
    role: Role!
  }

  input UpdateUserInput {
    email: String
    username: String
    firstName: String
    lastName: String
    birthday: DateTime
    bio: String
    image: String
    status: UserStatus
    state: UserState
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`;
