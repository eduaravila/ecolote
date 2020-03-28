import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';
import {
  PRIMARY_COLOR,
  STAT_LABEL_COLOR,
  HEY_COLOR,
  EPIC_COLOR,
  PRIMARY_LIGHT_COLOR,
} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: normalize(450),
    position: 'absolute',
    width: '90%',
    top: '5%',
    backgroundColor: 'transparent',
    borderRadius: normalize(10),
    flexDirection: 'column',
  },
  challengeTitle: {
    width: '100%',
    fontFamily: 'Rubik-Bold',
  },
  bonus: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginVertical: normalize(10),
  },
  total: {
    textAlign: 'right',
    marginVertical: normalize(10),
    fontSize: normalize(46),
  },
  grade: {
    textAlign: 'center',
    marginVertical: normalize(10),
    fontSize: normalize(46),
    textDecorationLine: 'underline',
  },
  right: {
    flex: 1,
    textAlign: 'right',
  },
  left: {
    flex: 1,
    textAlign: 'left',
  },
  buttomContainer: {
    width: '100%',
    height: normalize(40),
    marginVertical: normalize(5),
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  buttomText: {
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(12),
    width: '50%',
  },
  back: {
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
    marginHorizontal: normalize(10),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(20),
    padding: normalize(5),
    elevation: 5,
    zIndex: 10,
  },
  backZoom: {
    alignSelf: 'flex-end',
    marginVertical: normalize(10),
    marginHorizontal: normalize(10),
    backgroundColor: PRIMARY_COLOR,
    borderRadius: normalize(20),
    padding: normalize(5),
    elevation: 1,
    zIndex: 10,
  },
  insideModalContainer: {
    width: '100%',
    height: '100%',
  },
  title: {
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'absolute',
    paddingVertical: normalize(10),
    borderRadius: normalize(10),
  },
  titleContainer: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: STAT_LABEL_COLOR,
    borderRadius: normalize(10),
    elevation: 5,
  },

  descriptionText: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: normalize(10),
  },
  bodyContainer: {
    width: '93%',
    height: '90%',
    alignSelf: 'center',
    borderBottomEndRadius: normalize(10),
    borderBottomStartRadius: normalize(10),
    padding: normalize(10),
  },
  backdrop: {
    width: '93%',
    height: '100%',
    backgroundColor: PRIMARY_COLOR,
    opacity: 0.8,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    borderBottomEndRadius: normalize(10),
    borderBottomStartRadius: normalize(10),
  },
});
