import {Navigation} from 'react-native-navigation';

import {ECOLOTE_FORGOT_PASSWORD_SUCCESS} from '../screen_names';

const goForgotPasswordSuccess = async () => {
  try {
    Navigation.setRoot({
      root: {
        component: {
          name: ECOLOTE_FORGOT_PASSWORD_SUCCESS,
        },
      },
    });
  } catch (error) {
    
  }
};

export default goForgotPasswordSuccess;
