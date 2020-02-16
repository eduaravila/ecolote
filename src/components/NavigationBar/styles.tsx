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
    backgroundColor: PRIMARY_DARK_COLOR,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopEndRadius: normalize(10),
    borderTopStartRadius: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: normalize(32),
    height: normalize(32),
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    opacity: 0.7,
  },
  containerItemActive: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LABEL_ACTIVE_BACKGROUND_COLOR,
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  label: {
    color: PRIMARY_DARK_COLOR,
  },
  leftArrowIcon: {
    position: 'absolute',
    left: '2%',
    top: '20%',
    fontSize: normalize(30),
    color: PRIMARY_DARK_COLOR,
  },
  rightArrowIcon: {
    position: 'absolute',
    right: '2%',
    top: '20%',
    color: PRIMARY_DARK_COLOR,
    fontSize: normalize(30),
  },
});
