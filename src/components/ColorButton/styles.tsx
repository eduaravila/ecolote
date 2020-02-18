import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    height: normalize(80),
    width: normalize(160),
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: normalize(50),
    elevation: 5,
  },

  top: {
    width: '100%',
    height: normalize(80),
    position: 'absolute',
    zIndex: 10,
  },
  middle: {
    width: '100%',
    top: normalize(5),
    height: normalize(80),
    position: 'absolute',
    zIndex: 5,
  },
  bottom: {
    width: '100%',
    left: 0,
    top: normalize(8),
    height: normalize(80),
    position: 'absolute',
  },
  children: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 11,
    width: '100%',
    fontSize: normalize(36),
    height: normalize(70),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
