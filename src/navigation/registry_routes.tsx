import {Navigation} from 'react-native-navigation';

//* ROUTE NAMES
import {ECOLOTE_ACCESS_WELCOME} from './screen_names';
//* features
import Access from '../features/access/containers/index';

const registryComponents = () => {
  Navigation.registerComponent(ECOLOTE_ACCESS_WELCOME, () => Access);
};

export {registryComponents};
