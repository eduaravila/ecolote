import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    height: '20%',
    marginBottom: normalize(40),
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    marginVertical: normalize(15),
  },
});
