import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {
  STAT_LABEL_COLOR,
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  HEY_COLOR,
} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: normalize(150),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(15),
    marginVertical: normalize(15),
    alignSelf: 'center',
    padding: normalize(10),
    alignItems: 'center',
    elevation: 5,
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
    textDecorationLine: 'underline',
  },
  datailsButtom: {
    backgroundColor: HEY_COLOR,
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
    marginHorizontal: normalize(10),
    borderRadius: normalize(20),

    width: normalize(70),
    height: normalize(17),
    elevation: 5,
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerDate: {
    textAlign: 'left',
    width: '50%',
  },
});
