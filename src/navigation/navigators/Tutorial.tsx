import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';
import {ECOLOTE_TUTORIAL_1} from '../screen_names';

const goTutorial = async () => {
  try {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            statusBar: {
              style: 'light',
              backgroundColor: PRIMARY_LIGHT_COLOR,
            },
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ECOLOTE_TUTORIAL_1,
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

export default goTutorial;
