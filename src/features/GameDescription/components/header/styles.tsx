import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {PRIMARY_DARK_COLOR, PRIMARY_COLOR} from '../../../../style/COLOR';

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
    marginHorizontal: normalize(10),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(20),
    padding: normalize(5),
  },
  badgeContainer: {
    width: '70%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginVertical: normalize(10),
  },
});
