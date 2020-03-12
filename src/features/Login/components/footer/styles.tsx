import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // marginTop: normalize(25),
  },
  captionBold: {
    fontFamily: 'Rubik-Bold',
  },
  captionUndeline: {
    textDecorationLine: 'underline',
  },
  captionTop: {
    marginBottom: normalize(30),
  },
  boldText: {
    fontFamily: 'Rubik-Bold',
  },
  forgotPasswordText: {
    marginVertical: normalize(25),
  },
});
