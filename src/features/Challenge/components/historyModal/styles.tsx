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

  backArena: {
    marginHorizontal: normalize(10),
    backgroundColor: HEY_COLOR,
    textAlign: 'center',
    borderRadius: normalize(10),
    paddingLeft: normalize(8),
    paddingVertical: normalize(8),
    // width: normalize(50),
    elevation: 5,
  },
  nextArena: {
    // marginVertical: normalize(10),
    marginHorizontal: normalize(10),
    backgroundColor: HEY_COLOR,
    borderRadius: normalize(10),
    paddingLeft: normalize(8),
    textAlign: 'center',
    elevation: 5,

    paddingVertical: normalize(8),
  },
  titleArena: {
    width: '50%',
    textAlign: 'center',
    height: '100%',
    paddingVertical: normalize(10),
  },
  historyContainer: {
    width: '93%',
    height: '90%',
    alignSelf: 'center',
  },
  zoomModal: {
    borderRadius: normalize(10),
  },
  historyContainerBackDrop: {
    width: '100%',
    height: '100%',
    backgroundColor: PRIMARY_LIGHT_COLOR,
    opacity: 0.4,
    position: 'absolute',
    borderBottomEndRadius: normalize(10),
    borderBottomStartRadius: normalize(10),
  },
});
