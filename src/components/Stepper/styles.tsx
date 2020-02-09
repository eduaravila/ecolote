import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {PRIMARY_COLOR} from '../../style/COLOR';
import {SUBTITLE_1} from '../../style/SIZES';

export const styles = StyleSheet.create({
  point: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(100),
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: PRIMARY_COLOR,
    zIndex: 10,
    marginVertical: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  pointActive: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(100),
    borderColor: 'transparent',
    borderWidth: 3,
    backgroundColor: 'white',
    marginVertical: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginVertical: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  middleLine: {
    width: normalize(70),
    opacity: 0.5,
    height: 2,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: normalize(5),
    zIndex: 1,
    borderStyle: 'dashed',
  },
  text: {
    fontFamily: 'Rubik-Medium',
    fontSize: normalize(SUBTITLE_1),
    textAlign: 'center',
    color: 'white',
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
  },
  textActive: {
    fontFamily: 'Rubik-Medium',
    fontSize: normalize(SUBTITLE_1),
    textAlign: 'center',
    color: PRIMARY_COLOR,
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
  },
  stepperContainerLine: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  stepperContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
