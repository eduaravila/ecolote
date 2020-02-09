import {Navigation} from 'react-native-navigation';

//* ROUTE NAMES
import {
  ECOLOTE_ACCESS_WELCOME,
  ECOLOTE_SIGN_UP_EMAIL,
  ECOLOTE_SIGN_UP_USERNAME,
  ECOLOTE_SIGN_UP_CODE,
  ECOLOTE_SIGN_UP_SUCCESS,
  ECOLOTE_LOG_IN,
  ECOLOTE_FORGOT_PASSWORD_EMAIL,
  ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD,
  ECOLOTE_FORGOT_PASSWORD_SUCCESS,
  ECOLOTE_FORGOT_PASSWORD_CODE,
} from './screen_names';
//* features
import Access from '../features/access/containers/index';
import SingUpEmail from '../features/SignUpEmail/containers/index';
import {Grapper} from './navigators/Grapper';
import SignUpUsername from '../features/SingUpUsername/containers/container';
import SingUpCode from '../features/SignUpCode/containers/container';
import SingUpSuccess from '../features/SignUpSuccess/containers/container';
import LogIn from '../features/Login/containers/container';
import ForgotPasswordEmail from '../features/ForgotPasswordEmail/containers/container';
import ForgotPasswordResetPassword from '../features/ForgotPasswordResetPassword/containers/container';
import ForgotPasswordSuccess from '../features/ForgotPasswordSuccess/containers/container';
import ForgotPasswordCode from '../features/ForgotPasswordCode/containers/container';

const registryComponents = () => {
  Navigation.registerComponent(ECOLOTE_ACCESS_WELCOME, Grapper(Access));
  Navigation.registerComponent(ECOLOTE_SIGN_UP_EMAIL, Grapper(SingUpEmail));
  Navigation.registerComponent(
    ECOLOTE_SIGN_UP_USERNAME,
    Grapper(SignUpUsername),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_CODE, Grapper(SingUpCode));
  Navigation.registerComponent(ECOLOTE_SIGN_UP_SUCCESS, Grapper(SingUpSuccess));
  Navigation.registerComponent(ECOLOTE_LOG_IN, Grapper(LogIn));
  Navigation.registerComponent(
    ECOLOTE_FORGOT_PASSWORD_EMAIL,
    Grapper(ForgotPasswordEmail),
  );
  Navigation.registerComponent(
    ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD,
    Grapper(ForgotPasswordResetPassword),
  );
  Navigation.registerComponent(
    ECOLOTE_FORGOT_PASSWORD_SUCCESS,
    Grapper(ForgotPasswordSuccess),
  );
  Navigation.registerComponent(
    ECOLOTE_FORGOT_PASSWORD_CODE,
    Grapper(ForgotPasswordCode),
  );
};

export {registryComponents};
