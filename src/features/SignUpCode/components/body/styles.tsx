import {StyleSheet} from 'react-native';

import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    width: '100%',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  textLabel: {
    textAlign: 'left',
    width: '100%',
  },
  continuebutton: {
    marginVertical: normalize(40),
    width: '100%',
  },
  textUnderline:{
      textDecorationLine:"underline"
  }
});
