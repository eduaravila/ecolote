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
  loadingStat: {
    width: '100%',
  },
  loadingContainer: {
    width: '100%',
    padding: 0,
  },
  loadingTitle: {
    fontSize: normalize(30),
    width: '80%',
    zIndex: 5,
    textAlign: 'center',
  },
  loadingContainerJr: {
    height: '100%',
    width: '100%',
  },
  loadingContent: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    elevation: 0,
  },
  loadingIcon: {
    width: normalize(100),
    height: normalize(100),
    position: 'absolute',
    left: normalize(-10),
    transform: [{rotate: '30deg'}],
  },
  loadingIconContainer: {
    width: '20%',
  },
});
