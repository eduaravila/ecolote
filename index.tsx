import {Navigation} from 'react-native-navigation';

import {
  ECOLOTE_ACCESS_WELCOME,
  ECOLOTE_SIGN_UP_EMAIL,
} from './src/navigation/screen_names';
import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';
import {PRIMARY_DARK_COLOR} from './src/style/COLOR';

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
      backgroundColor: PRIMARY_DARK_COLOR,
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          statusBar: {
            style: 'light',
            backgroundColor: PRIMARY_DARK_COLOR,
          },
          topBar: {
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: ECOLOTE_ACCESS_WELCOME,
            },
          },
        ],
      },
    },
  });
});
