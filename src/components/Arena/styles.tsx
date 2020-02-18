import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(300),
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
