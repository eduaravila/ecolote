import {Navigation} from 'react-native-navigation';

import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';
import {PRIMARY_DARK_COLOR} from './src/style/COLOR';
import goAccess from './src/navigation/navigators/Access';

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
      backgroundColor: PRIMARY_DARK_COLOR,
    },
  });
  goAccess();
});
