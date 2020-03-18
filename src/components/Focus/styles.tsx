import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width: normalize(80),
    height: normalize(80),
  },
});
