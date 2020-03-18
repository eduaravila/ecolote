import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR, PRIMARY_COLOR} from '../../style/COLOR';
import {ECOLOTE_CAMERA} from '../screen_names';

const goCamera = async () => {
  try {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            statusBar: {
              style: 'light',
              backgroundColor: PRIMARY_COLOR,
            },
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ECOLOTE_CAMERA,
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

export default goCamera;
