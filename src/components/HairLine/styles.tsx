import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  hairLine: {
    width: '100%',
    height: 2,
    borderColor: 'white',
    borderWidth: 2,
    zIndex: 1,
    borderRadius: normalize(10),
  },
});
