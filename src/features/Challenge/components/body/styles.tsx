import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(15),
  },
  arena: {
    width: normalize(250),
    height: normalize(250),
    resizeMode: 'contain',
  },
  arenaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(300),
    height: normalize(300),
  },
  playButton: {
    marginTop: normalize(10),
  },
  cancelButton: {
    marginTop: normalize(20),
  },
});
