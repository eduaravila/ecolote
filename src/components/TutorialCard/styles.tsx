import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {
  PRIMARY_LIGHT_COLOR,
  GAME_POINT_INACTIVE,
  PRIMARY_DARK_COLOR,
  PRIMARY_COLOR,
  STAT_LABEL_COLOR,
} from '../../style/COLOR';
export const styles = StyleSheet.create({
  descriptionText: {
    textAlign: 'center',
    marginVertical: normalize(10),
    fontSize: normalize(20),
    fontFamily: 'Rubik-Medium',
    width: '100%',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  title: {
    textAlign: 'center',
    marginVertical: normalize(10),
  },
  logo: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  constainer: {
    justifyContent: 'space-evenly',
    backgroundColor: STAT_LABEL_COLOR,
    borderRadius: normalize(10),
    // flex: 0.8,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 18, // needed for shadow    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    paddingVertical: normalize(20),
    elevation: 5,
  },
  descriptionBox: {
    marginVertical: normalize(5),
  },
});
