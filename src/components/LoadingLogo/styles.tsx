import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../style/COLOR';
import {normalize} from '../../style/UTILS';
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(250),
    height: normalize(250),
    resizeMode: 'contain',
  },
});
