import {ApolloLink, InMemoryCache} from 'apollo-boost';
import {ErrorLink} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {API, API_PROD, DEV} from 'react-native-dotenv';
import {setContext} from 'apollo-link-context';
import {createUploadLink} from 'apollo-upload-client';
import {MEDIA_UPLOAD_API} from 'react-native-dotenv';

import store from '../state/store';
import {Alert} from 'react-native';
import goLogin from '../navigation/navigators/Login';

const errorLink = new ErrorLink(({graphQLErrors, networkError}: any) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path, extensions}: any) => {
      console.log('gql error', message, extensions.code);
      if (extensions.code == 'UNAUTHENTICATED') {
        store.dispatch.credentials.setMediaToken({
          token: '',
        });
        store.dispatch.credentials.setToken({
          token: '',
        });
        Alert.alert(
          'Sesion expirada',
          'Es necesario que inices sesion de nuevo',
          [{text: 'OK', onPress: () => goLogin()}],
          {cancelable: false, onDismiss: () => goLogin()},
        );
      }
    });

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

const authLinkMedia = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().credentials.mediaToken;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token,
    },
  };
});

const httpLink = new HttpLink({
  uri: DEV == 'true' ? API.trim() : API_PROD.trim(),
});
console.log(API_PROD, DEV);

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export const client_media = new ApolloClient({
  link: ApolloLink.from([
    authLinkMedia,
    createUploadLink({
      uri: MEDIA_UPLOAD_API.trim(),
    }),
  ]),
  cache: new InMemoryCache(),
});
