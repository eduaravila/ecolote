import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_LIGHT_COLOR,
  LABEL_ACTIVE_BACKGROUND_COLOR,
} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    height: normalize(50),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: PRIMARY_DARK_COLOR,
    borderTopEndRadius: normalize(10),
    borderTopStartRadius: normalize(10),
  },
  logo: {
    width: normalize(32),
    height: normalize(32),
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    opacity: 0,
    height: '100%',
    width: '100%',
  },
  containerItemActive: {
    margin: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  label: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
  },
  leftArrowIcon: {
    position: 'absolute',
    left: '-10%',
    top: '20%',
    fontSize: normalize(30),
    color: 'white',
    zIndex: 10,
  },
  rightArrowIcon: {
    position: 'absolute',
    right: '-10%',
    zIndex: 10,
    top: '20%',
    color: 'white',
    fontSize: normalize(30),
  },
});
