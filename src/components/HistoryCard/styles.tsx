import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {STAT_LABEL_COLOR} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(150),
    backgroundColor: STAT_LABEL_COLOR,
    borderRadius: normalize(15),
    elevation: 5,
    marginVertical: normalize(5),
    padding: normalize(10),
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Rubik-Bold',
    width: '70%',
  },
  titleContainer: {
    width: '100%',
    height: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%',
    alignItems: 'center',
  },
  grade: {
    width: '40%',
    textAlign: 'center',
  },
});
