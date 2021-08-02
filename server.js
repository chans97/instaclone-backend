import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => "as",
    },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // GraphQLPlayground 를 바로 사용하기 위함 
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
  
});


server.listen().then(({ url })=>{console.log(`go to ${url}`)});
