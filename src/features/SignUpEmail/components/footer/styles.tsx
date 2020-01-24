import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: normalize(90),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  overline: {
    textDecorationLine: 'underline',
  },
});
