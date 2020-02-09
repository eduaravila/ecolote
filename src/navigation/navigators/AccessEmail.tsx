import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {ECOLOTE_ACCESS_WELCOME, ECOLOTE_SIGN_UP_EMAIL} from '../screen_names';

const goAccessEmail = async () => {
  try {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            statusBar: {
              style: 'light',
              backgroundColor: PRIMARY_DARK_COLOR,
            },
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ECOLOTE_ACCESS_WELCOME,
              },
            },
            {
              component: {
                name: ECOLOTE_SIGN_UP_EMAIL,
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

export default goAccessEmail;
