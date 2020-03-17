import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {
  PRIMARY_LIGHT_COLOR,
  GAME_POINT_INACTIVE,
  PRIMARY_DARK_COLOR,
  PRIMARY_COLOR,
} from '../../style/COLOR';
export const styles = StyleSheet.create({
  descriptionText: {
    textAlign: 'center',
    marginVertical: normalize(20),
    fontSize: normalize(20),
    fontFamily: 'Rubik-Medium',
    width: '100%',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  logo: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  constainer: {
    justifyContent: 'center',
    borderRadius: normalize(10),
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    paddingVertical: 18, // needed for shadow    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    maxHeight: normalize(330),
  },
});
