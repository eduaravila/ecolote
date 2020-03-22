import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // marginTop: normalize(40),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  textUnderline: {
    textDecorationLine: 'underline',
    fontFamily: 'Rubik-Bold',
  },
  hairLine: {
    marginVertical: normalize(10),
  },
  registerText: {
    fontFamily: 'Rubik-Bold',
  },
});
