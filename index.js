import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import QUERY from './query.js'

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
  credentials: 'include',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query Query {
        getCompareModelList {
          id
          name
        }
      }
    `
  }).then(result => console.log(result))

