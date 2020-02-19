import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: normalize(61),
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(64),
    borderRadius: normalize(10),
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  logo: {
    width: normalize(50),
    height: normalize(50),
    resizeMode: 'contain',
    position: 'absolute',
    top: normalize(12),
  },
});
