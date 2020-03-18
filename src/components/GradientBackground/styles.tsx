import {StyleSheet} from 'react-native';
import {getColumn, normalize} from '../../style/UTILS';
import {INPUT_BORDER_COLOR_ERROR, INPUT_BORDER_COLOR} from '../../style/COLOR';
import {CAPTION_SIZE} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingLeft: getColumn(0.5),
    backgroundColor: 'transparent',
    paddingRight: getColumn(0.5),
  },
  messageContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: INPUT_BORDER_COLOR_ERROR,
  },
  offlineContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: INPUT_BORDER_COLOR,
  },
  messageText: {
    color: 'white',
    fontFamily: 'Rubik-Bold',
    fontSize: CAPTION_SIZE,
    width: '100%',

    textAlign: 'center',
  },
});
