import {StyleSheet} from 'react-native';
import {normalize} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: normalize(56),
    borderRadius: normalize(50),
  },

  text: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(14),
    color: 'white',
    textAlignVertical: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    elevation: 5,
  },
});
