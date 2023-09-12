import { ApolloClient, createHttpLink, InMemoryCache, from, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { errorLink } from 'src/client/errorLink';
import { storage } from 'src/utils/storage';
import { URL, WS_URL } from 'src/client/config';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import possibleTypes from './possibleTypes.json';
import { TOKEN_KEY } from '../store/token';

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${WS_URL}/subscriptions`,
    connectionParams: () => {
      const token = storage.get(TOKEN_KEY);
      return {
        authorization: token ? `Bearer ${token}` : '',
      };
    },
  })
);

const httpLink = createHttpLink({
  uri: `${URL}/graphql`,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const token = storage.get(TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client: ApolloClient<unknown> = new ApolloClient({
  link: from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache({
    possibleTypes,
  }),
});
