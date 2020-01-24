import {StyleSheet} from 'react-native';

import {normalize} from '../../style/UTILS';
import {SUBTITLE_1} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    fontSize: normalize(SUBTITLE_1),
    fontFamily: 'Rubik-Regular',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
