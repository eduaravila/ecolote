import {ApolloLink, InMemoryCache} from 'apollo-boost';
import {ErrorLink} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {API} from 'react-native-dotenv';
import store from '../state/store';

const errorLink = new ErrorLink(({graphQLErrors, networkError}: any) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path, extensions}: any) =>
      console.log(extensions),
    );

  if (networkError) {
    store.dispatch.networkStatus.setStatus({
      error: true,
      msg: 'Network Error 📛',
    });
  }
});

const httpLink = new HttpLink({
  uri: API,
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
