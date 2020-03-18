import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {getColumn} from '../../../../style/UTILS';
import {PRIMARY_COLOR} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  back: {
    alignSelf: 'flex-end',
    marginHorizontal: normalize(10),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(20),
    padding: normalize(5),
  },
  badgeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: normalize(20),
  },
  descriptionLabel: {
    width: '100%',
    textAlign: 'left',
    marginHorizontal: getColumn(0.5),
    marginVertical: normalize(20),
  },
});
