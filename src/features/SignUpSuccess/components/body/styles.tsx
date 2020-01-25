import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(150),
  },

  loginButton: {
    marginVertical: normalize(10),
    width: '100%',
  },
  logo: {
    width: normalize(250),
    height: normalize(170),
    resizeMode: 'contain',
  },
  message: {
    textAlign: 'center',
    marginVertical: normalize(30),
  },
});
