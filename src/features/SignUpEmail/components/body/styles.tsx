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
  emailInput: {
    marginVertical: normalize(20),
    color: 'black',
  },
  hairLine: {
    marginVertical: normalize(30),
  },
  otherLoginCaption: {
    fontFamily: 'Rubik-Bold',
    textDecorationLine: 'underline',
  },
});
