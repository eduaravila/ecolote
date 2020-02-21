import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
    marginVertical: normalize(10),
  },

  back: {
    alignSelf: 'flex-end',
    marginBottom: normalize(20),
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
