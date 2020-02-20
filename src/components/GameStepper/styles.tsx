import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {
  PRIMARY_LIGHT_COLOR,
  PRIMARY_DARK_COLOR,
  GAME_POINT_INACTIVE,
} from '../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    minHeight: normalize(20),
    width: '100%',
    backgroundColor: PRIMARY_LIGHT_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10),
    alignItems: 'center',
    borderRadius: normalize(10),
    marginVertical: normalize(10),
  },
  pointActive: {
    backgroundColor: PRIMARY_DARK_COLOR,
    borderRadius: normalize(50),
    height: normalize(15),
    width: normalize(15),
  },
  point: {
    height: normalize(15),
    width: normalize(15),
    backgroundColor: GAME_POINT_INACTIVE,
    borderRadius: normalize(50),
  },
});
