import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
    marginVertical: normalize(10),
  },
  logo: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  back: {
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
  },
});
