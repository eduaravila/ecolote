import {Navigation} from 'react-native-navigation';

import {ECOLOTE_SIGN_UP_CODE} from '../screen_names';

interface goSignUpCodeType {
  token: string;
  email: string;
  username: string;
}

const goSignUpCode = async (props: goSignUpCodeType) => {
  try {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    Navigation.setRoot({
      root: {
        component: {
          name: ECOLOTE_SIGN_UP_CODE,
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

export default goSignUpCode;
