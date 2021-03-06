import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    bio: String
    avatar: String
    createdAt: String!
    updatedAt: String!
    followings: [User]
    followers: [User]
    totalFollowings: Int!
    totalFollowers: Int!
    photos: [Photo]
    isMe: Boolean!
    isFollowing: Boolean!
  }
`;
//
//
