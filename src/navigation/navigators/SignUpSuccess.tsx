import {Navigation} from 'react-native-navigation';

import {ECOLOTE_SIGN_UP_SUCCESS} from '../screen_names';

const goSignUpSuccess = async () => {
  try {
    Navigation.setRoot({
      root: {
        component: {
          name: ECOLOTE_SIGN_UP_SUCCESS,
        },
      },
    });
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

export default goSignUpSuccess;
