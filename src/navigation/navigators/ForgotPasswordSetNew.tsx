import {Navigation} from 'react-native-navigation';

import {ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD} from '../screen_names';

interface goForgotPasswordResetePasswordType {
  token: string;
  code: string;
}

const goForgotPasswordResetePassword = async (
  props: goForgotPasswordResetePasswordType,
) => {
  try {
    Navigation.setRoot({
      root: {
        component: {
          name: ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD,
          passProps: {...props},
        },
      },
    });
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

export default goForgotPasswordResetePassword;
