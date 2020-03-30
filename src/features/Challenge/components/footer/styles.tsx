import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';
import {PRIMARY_LIGHT_COLOR} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(100),
    // position: 'absolute',
    bottom: 0,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    backgroundColor: PRIMARY_LIGHT_COLOR,
    elevation: 5,
    borderRadius: normalize(10),
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
});
