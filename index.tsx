import {Navigation} from 'react-native-navigation';
import Orientation from 'react-native-orientation';
import {API} from 'react-native-dotenv';

import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';
import {PRIMARY_DARK_COLOR, PRIMARY_COLOR} from './src/style/COLOR';
import goAccess from './src/navigation/navigators/Access';
import goDashboard from './src/navigation/navigators/Dashboard';

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
 
  Orientation.lockToPortrait();
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
      backgroundColor: PRIMARY_COLOR,
    },
    layout: {
      orientation: ['portrait'],
    },
  });
  goDashboard();
});
