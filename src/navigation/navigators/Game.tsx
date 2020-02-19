import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {ECOLOTE_GAME} from '../screen_names';

const goGame = async () => {
  try {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            statusBar: {
              style: 'light',
              backgroundColor: PRIMARY_DARK_COLOR,
              visible: false,
            },
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: ECOLOTE_GAME,
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

export default goGame;
