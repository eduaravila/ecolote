import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    alignSelf: 'center',
  },
  arena: {
    width: normalize(250),
    height: normalize(250),
    resizeMode: 'contain',
  },
  arenaContainer: {
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(300),
    height: normalize(300),
  },
  title: {
    fontSize: normalize(36),
  },
});
