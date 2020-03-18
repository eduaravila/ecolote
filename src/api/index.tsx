import {ApolloLink, InMemoryCache} from 'apollo-boost';
import {ErrorLink} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {API} from 'react-native-dotenv';
import {setContext} from 'apollo-link-context';
import {RetryLink} from 'apollo-link-retry';

import store from '../state/store';

const retryLink = new RetryLink();

const errorLink = new ErrorLink(({graphQLErrors, networkError}: any) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path, extensions}: any) =>
      console.log('gql error', message),
    );

  if (networkError) {
    if (store.getState().networkStatus.show) return;

    let timer = setTimeout(() => {
      store.dispatch.networkStatus.setStatus({
        show: false,
        msg: 'Network Error 📛',
      });
    }, 10000);

    store.dispatch.networkStatus.setStatus({
      show: true,
      msg: 'Network Error 📛',
    });
  }
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().credentials.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token,
    },
  };
});

const httpLink = new HttpLink({
  uri: API.trim(),
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});
