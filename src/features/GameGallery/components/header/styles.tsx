import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {getColumn} from '../../../../style/UTILS';
import {PRIMARY_COLOR} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: 'transparent',
    marginVertical: normalize(10),
  },
  noPhotosTitle: {
    width: '100%',
    textAlign: 'center',
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
  noPhotosImage: {
    width: normalize(100),
    height: normalize(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
