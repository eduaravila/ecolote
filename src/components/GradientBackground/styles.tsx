import {StyleSheet} from 'react-native';
import {getColumn} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingLeft: getColumn(0.5),
    paddingRight: getColumn(0.5),
  },
});
