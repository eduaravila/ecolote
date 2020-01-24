import {Navigation} from 'react-native-navigation';

//* ROUTE NAMES
import {ECOLOTE_ACCESS_WELCOME, ECOLOTE_SIGN_UP_EMAIL} from './screen_names';
//* features
import Access from '../features/access/containers/index';
import SingUpEmail from '../features/SignUpEmail/containers/index';
import {Grapper} from './navigators/Grapper';

const registryComponents = () => {
  Navigation.registerComponent(ECOLOTE_ACCESS_WELCOME, Grapper(Access));
  Navigation.registerComponent(ECOLOTE_SIGN_UP_EMAIL, Grapper(SingUpEmail));
};

export {registryComponents};
