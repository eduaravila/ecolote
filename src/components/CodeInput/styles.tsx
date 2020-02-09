import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';
import {PRIMARY_DARK_COLOR, INPUT_BORDER_COLOR_ERROR} from '../../style/COLOR';
import {SUBTITLE_1} from '../../style/SIZES';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: normalize(40),
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(15),
    width: normalize(40),
    height: normalize(40),
  },
  inputContainerErr: {
    backgroundColor: 'white',
    borderRadius: normalize(15),
    width: normalize(40),
    height: normalize(40),
    borderWidth: normalize(5),
    borderColor: INPUT_BORDER_COLOR_ERROR,
  },
  input: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(SUBTITLE_1),
    color: PRIMARY_DARK_COLOR,
  },
  error: {
    width: '100%',
    marginTop: normalize(5),
    textAlign: 'left',
    paddingHorizontal: normalize(10),
    fontFamily: 'Rubik-Bold',
  },
});
