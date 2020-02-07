import React, {ReactNode} from 'react';
import Orientation from 'react-native-orientation';
import {ApolloProvider} from '@apollo/react-hooks';
import {StoreProvider} from 'easy-peasy';

import {StatusBarCustom} from '../../components/StatusBar/StatusBarCustom';
import {client} from '../../api';
import store from '../../state/store';

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
            <StoreProvider store={store}>
              <StatusBarCustom />
              <MyComponent {...this.props} />
            </StoreProvider>
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
