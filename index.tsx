import {Navigation} from 'react-native-navigation';
import Orientation from 'react-native-orientation';
import {API} from 'react-native-dotenv';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {registryComponents} from './src/navigation/registry_routes';
import SplashScreen from 'react-native-splash-screen';
import {PRIMARY_DARK_COLOR, PRIMARY_COLOR} from './src/style/COLOR';

import goTutorial from './src/navigation/navigators/Tutorial';

console.log(API);

registryComponents();

Navigation.events().registerAppLaunchedListener(() => {
  changeNavigationBarColor(PRIMARY_DARK_COLOR);
  Orientation.lockToPortrait();
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
      backgroundColor: PRIMARY_DARK_COLOR,
    },
    layout: {
      orientation: ['portrait'],
    },
  });
  // goAccess();
  goTutorial();
});
