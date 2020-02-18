import {StyleSheet} from 'react-native';
import {getColumn, normalize} from '../../style/UTILS';
import {
  STAT_LABEL_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_DARK_COLOR,
} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: normalize(46),
    height: '100%',
    borderRadius: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STAT_LABEL_COLOR,
    elevation: 5,
  },
  logo: {
    width: normalize(36),
    height: normalize(36),
    overflow: 'visible',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  logoContainer: {
    width: normalize(46),
    height: normalize(46),
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
