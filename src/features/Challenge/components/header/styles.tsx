import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';
import {PRIMARY_COLOR, PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
export const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'Rubik-Bold',
    width: normalize(90),
  },
  textRight: {
    textAlign: 'right',
    width: normalize(60),
  },
  textBackground: {
    backgroundColor: PRIMARY_DARK_COLOR,
  },
  walletContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: normalize(5),
    flexDirection: 'row',
  },
  container: {
    width: '100%',
  },
  userInfoContainerJr: {
    height: '100%',
    width: '100%',
  },
  userInfoContainer: {
    width: normalize(200),
  },
  userInfoContent: {
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 0,
  },
  trophyContainer: {
    width: normalize(90),
  },
  trophyContainerJr: {
    width: normalize(70),
    backgroundColor: PRIMARY_DARK_COLOR,
    elevation: 0,
    position: 'absolute',
    right: 0,
  },
  trophyBorder: {
    backgroundColor: PRIMARY_DARK_COLOR,
  },
  trophyIcon: {
    width: normalize(32),
    height: normalize(32),
  },
});
