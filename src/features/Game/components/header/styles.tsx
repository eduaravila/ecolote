import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
    height: '20%',
    marginVertical: normalize(20),
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  back: {
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
  },
});
