import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    height: '100%',
  },
  textRight: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  textLeft: {
    alignSelf: 'flex-start',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
});
