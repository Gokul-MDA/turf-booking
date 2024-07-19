import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    // uri: "http://localhost:4000/graphql",
    uri: "https://turf-server-five.vercel.app/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
