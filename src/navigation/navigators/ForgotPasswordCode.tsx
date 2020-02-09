import {Navigation} from 'react-native-navigation';

import {ECOLOTE_FORGOT_PASSWORD_CODE} from '../screen_names';

interface goForgotPasswordCodeType {
  token: string;
  email: string;
}

const goForgotPasswordCode = async (props: goForgotPasswordCodeType) => {
  try {
    Navigation.setRoot({
      root: {
        component: {
          name: ECOLOTE_FORGOT_PASSWORD_CODE,
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

export default goForgotPasswordCode;
