import 'react-native-get-random-values';
import {Navigation} from 'react-native-navigation';
import Orientation from 'react-native-orientation';
import {persistStore} from 'redux-persist';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';
import {PRIMARY_DARK_COLOR, PRIMARY_COLOR} from './src/style/COLOR';
import store from './src/state/store';

import goTutorial from './src/navigation/navigators/Tutorial';
import goAccess from './src/navigation/navigators/Access';
import goDashboard from './src/navigation/navigators/Dashboard';

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
  changeNavigationBarColor(PRIMARY_DARK_COLOR);
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
  let {show} = store.getState().tutorial;
  let {token, mediaToken} = store.getState().credentials;

  if (token && mediaToken) {
    return goDashboard();
  }

  show ? goTutorial() : goAccess();
});
