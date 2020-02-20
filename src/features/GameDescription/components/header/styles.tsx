import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
    height: '20%',
    marginVertical: normalize(20),
  },
  
  back: {
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
  },
  badgeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: normalize(20),
  },
});
