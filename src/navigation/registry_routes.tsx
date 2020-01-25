import {Navigation} from 'react-native-navigation';

//* ROUTE NAMES
import {
  ECOLOTE_ACCESS_WELCOME,
  ECOLOTE_SIGN_UP_EMAIL,
  ECOLOTE_SIGN_UP_USERNAME,
  ECOLOTE_SIGN_UP_CODE,
  ECOLOTE_SIGN_UP_SUCCESS,
} from './screen_names';
//* features
import Access from '../features/access/containers/index';
import SingUpEmail from '../features/SignUpEmail/containers/index';
import {Grapper} from './navigators/Grapper';
import SignUpUsername from '../features/SingUpUsername/containers/container';
import SingUpCode from '../features/SignUpCode/containers/container';
import SingUpSuccess from '../features/SignUpSuccess/containers/container';

const registryComponents = () => {
  Navigation.registerComponent(ECOLOTE_ACCESS_WELCOME, Grapper(Access));
  Navigation.registerComponent(ECOLOTE_SIGN_UP_EMAIL, Grapper(SingUpEmail));
  Navigation.registerComponent(
    ECOLOTE_SIGN_UP_USERNAME,
    Grapper(SignUpUsername),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_CODE, Grapper(SingUpCode));
  Navigation.registerComponent(ECOLOTE_SIGN_UP_SUCCESS, Grapper(SingUpSuccess));
};

export {registryComponents};
