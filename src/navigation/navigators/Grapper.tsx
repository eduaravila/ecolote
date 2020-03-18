import React, {ReactNode} from 'react';
import Orientation from 'react-native-orientation';
import {ApolloProvider} from '@apollo/react-hooks';
import {StoreProvider} from 'easy-peasy';
import {API} from 'react-native-dotenv';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import NetInfo from '@react-native-community/netinfo';

import {StatusBarCustom} from '../../components/StatusBar/StatusBarCustom';
import {client} from '../../api';
import store from '../../state/store';
import goTutorial from './Tutorial';
import goAccess from './Access';
import goDashboard from './Dashboard';
import {LoadingLogo} from '../../components/LoadingLogo/LoadingLogo';

const persistor = persistStore(store, null, () => {
  // Subscribe
  console.log('api', API);

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    store.dispatch.network.setOnline({online: state.isConnected});
  });

  let {show} = store.getState().tutorial;
  let {token, mediaToken} = store.getState().credentials;

  if (token && mediaToken) {
    return goDashboard();
  }

  show ? goTutorial() : goAccess();
});

export function Grapper(MyComponent: React.FunctionComponent<any>) {
  return () => {
    return class StoreWrapper extends React.Component<any, any> {
      componentDidMount() {
        Orientation.lockToPortrait();
      }
      constructor(props: any) {
        super(props);
      }

      render() {
        return (
          <ApolloProvider client={client}>
            <PersistGate loading={<LoadingLogo />} persistor={persistor}>
              <StoreProvider store={store}>
                <StatusBarCustom />
                <MyComponent {...this.props} />
              </StoreProvider>
            </PersistGate>
          </ApolloProvider>
        );
      }
    };
  };
}

// export function GrapperBackEvent(MyComponent) {
//   return () => {
//     return class StoreWrapper extends React.Component {
//       componentDidMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.avisoVolver);
//       }
//       componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.avisoVolver);
//       }
//       avisoVolver = e => {
//         Alert.alert(
//           'Exit',
//           'Are you sure want to leaving?',
//           [
//             {
//               text: 'Exit',
//               onPress: () => BackHandler.exitApp(),
//               style: 'destructive',
//             },
//           ],
//           {
//             cancelable: true,
//             onDismiss: () => null,
//           },
//         );
//         return true;
//       };
//       render() {
//         return (
//           <ApolloProvider client={client_gql}>
//             <Provider store={store}>
//               <MyComponent {...this.props} />
//             </Provider>
//           </ApolloProvider>
//         );
//       }
//     };
//   };
// }
