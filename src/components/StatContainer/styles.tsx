import {StyleSheet} from 'react-native';
import {getColumn, normalize} from '../../style/UTILS';
import {STAT_LABEL_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: getColumn(2.2),
    height: normalize(46),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerJr: {
    width: getColumn(2),
    height: normalize(30),
    backgroundColor: STAT_LABEL_COLOR,
    borderRadius: normalize(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  header: {
    backgroundColor: PRIMARY_LIGHT_COLOR,
    width: '100%',
    height: normalize(10),
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
  },
  content: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logo: {
    width: normalize(46),
    height: normalize(46),
    overflow: 'visible',
    resizeMode: 'contain',

  },
  logoContainer: {
    elevation: 10,
    width: normalize(46),
    height: normalize(46),
    overflow: 'visible',
    position: 'absolute',
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconText: {
    alignSelf: 'center',
    position: 'absolute',
    top: normalize(15),
    fontFamily: 'Rubik-Bold',
  },
});
