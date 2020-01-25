import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {SUBTITLE_1} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: normalize(40),
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(15),
    width: normalize(40),
    height: normalize(40),
  },
  input: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(SUBTITLE_1),
    color: PRIMARY_DARK_COLOR,
  },
});
