import {StyleSheet} from 'react-native';

import {normalize} from '../../style/UTILS';
import {SUBTITLE_2} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    fontSize: normalize(SUBTITLE_2),
    fontFamily: 'Rubik-Medium',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
