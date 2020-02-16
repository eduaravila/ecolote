import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

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
  ECOLOTE_DASHBOARD_CHALLENGE,
  ECOLOTE_DASHBOARD,
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
import Challenge from '../features/Challenge/containers/container';
import Dashboard from '../features/Dashboard/containers/container';

const registryComponents = () => {
  Navigation.registerComponent(ECOLOTE_ACCESS_WELCOME, () =>
    gestureHandlerRootHOC(Grapper(Access)()),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_EMAIL, () =>
    gestureHandlerRootHOC(Grapper(SingUpEmail)()),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_USERNAME, () =>
    gestureHandlerRootHOC(Grapper(SignUpUsername)()),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_CODE, () =>
    gestureHandlerRootHOC(Grapper(SingUpCode)()),
  );
  Navigation.registerComponent(ECOLOTE_SIGN_UP_SUCCESS, () =>
    gestureHandlerRootHOC(Grapper(SingUpSuccess)()),
  );
  Navigation.registerComponent(ECOLOTE_LOG_IN, () =>
    gestureHandlerRootHOC(Grapper(LogIn)()),
  );
  Navigation.registerComponent(ECOLOTE_FORGOT_PASSWORD_EMAIL, () =>
    gestureHandlerRootHOC(Grapper(ForgotPasswordEmail)()),
  );
  Navigation.registerComponent(ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD, () =>
    gestureHandlerRootHOC(Grapper(ForgotPasswordResetPassword)()),
  );
  Navigation.registerComponent(ECOLOTE_FORGOT_PASSWORD_SUCCESS, () =>
    gestureHandlerRootHOC(Grapper(ForgotPasswordSuccess)()),
  );
  Navigation.registerComponent(ECOLOTE_FORGOT_PASSWORD_CODE, () =>
    gestureHandlerRootHOC(Grapper(ForgotPasswordCode)()),
  );
  Navigation.registerComponent(ECOLOTE_DASHBOARD_CHALLENGE, () =>
    gestureHandlerRootHOC(Grapper(Challenge)()),
  );
  Navigation.registerComponent(ECOLOTE_DASHBOARD, () =>
    gestureHandlerRootHOC(Grapper(Dashboard)()),
  );
};

export {registryComponents};
