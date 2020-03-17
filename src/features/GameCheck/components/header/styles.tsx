import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import { PRIMARY_COLOR } from '../../../../style/COLOR';

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
    // marginHorizontal: normalize(10),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(20),
    padding: normalize(5),
  },
});
