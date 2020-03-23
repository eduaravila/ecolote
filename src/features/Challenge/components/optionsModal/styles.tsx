import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';
import {PRIMARY_COLOR} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(40),
    marginVertical: normalize(5),
  },
  modalContainer: {
    width: normalize(150),
    height: normalize(100),
    position: 'absolute',
    right: '25%',
    top: '10%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(10),
    flexDirection: 'column',
    padding: normalize(10),
  },
  buttomContainer: {
    width: '100%',
    height: normalize(40),
    marginVertical: normalize(5),
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  buttomText: {
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(11),
    width: '50%',
  },
});
