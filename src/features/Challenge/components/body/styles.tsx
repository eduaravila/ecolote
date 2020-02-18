import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(20),
  },
  arena: {
    width: normalize(300),
    height: normalize(300),
    resizeMode: 'contain',
  },
  arenaContainer: {
    elevation: 10,
    width: normalize(300),
    height: normalize(300),
  },
});
