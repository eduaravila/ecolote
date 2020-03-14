import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {PRIMARY_LIGHT_COLOR} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    opacity: 0.8,
    marginVertical: normalize(10),
    backgroundColor: PRIMARY_LIGHT_COLOR,
    padding: normalize(10),
    borderRadius: normalize(5),
  },
  
});
