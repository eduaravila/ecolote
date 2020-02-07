import {StyleSheet} from 'react-native';

import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    fontFamily: 'Rubik-Bold',
    fontSize: normalize(14),
    color: 'white',
    textAlignVertical: 'center',
    position: 'absolute',
    paddingHorizontal: normalize(20),
    left: 0,
    top: 0,
    flex: 1,
  },
  container: {
    width: '50%',
    height: normalize(56),
    borderRadius: normalize(50),
  },
  error: {
    width: '100%',
    marginTop: normalize(5),
    textAlign: 'left',
    paddingHorizontal: normalize(10),
    fontFamily: 'Rubik-Bold',
  },
  errorIcon: {
    position: 'absolute',
    right: '0%',
    height: '100%',
    paddingHorizontal: normalize(20),
    textAlignVertical: 'center',
  },
});
