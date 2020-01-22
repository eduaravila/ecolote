import {Navigation} from 'react-native-navigation';

import {ECOLOTE_ACCESS_WELCOME} from './src/navigation/screen_names';
import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setRoot({
    root: {
      component: {
        name: ECOLOTE_ACCESS_WELCOME,
      },
    },
  });
});
