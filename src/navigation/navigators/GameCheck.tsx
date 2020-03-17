import {Navigation} from 'react-native-navigation';

import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {ECOLOTE_GAME_COMENTARY, ECOLOTE_GAME_CHECK} from '../screen_names';

const goGameCheck = async (props: any) => {
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
                name: ECOLOTE_GAME_CHECK,
                passProps: {...props},
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

export default goGameCheck;
