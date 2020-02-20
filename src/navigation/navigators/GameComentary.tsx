import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {ECOLOTE_GAME_COMENTARY} from '../screen_names';

const goGameComentary = async () => {
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
                name: ECOLOTE_GAME_COMENTARY,
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

export default goGameComentary;
