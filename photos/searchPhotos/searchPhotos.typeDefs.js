import { gql } from "apollo-server";
export default gql`
  type Query {
    searchPhotos(ketword: String!): [Photo]
  }
`;
