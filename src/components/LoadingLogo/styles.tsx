import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../style/COLOR';
import {normalize} from '../../style/UTILS';
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '90%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 10,
  },
  image: {
    width: normalize(250),
    height: normalize(250),
    resizeMode: 'contain',
  },
});
