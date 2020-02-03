import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // position: 'absolute',
    // bottom: normalize(20),
  },
  captionBold: {
    fontFamily: 'Rubik-Bold',
  },
  captionUndeline: {
    textDecorationLine: 'underline',
  },
  captionTop: {
    marginBottom: normalize(10),
  },
});
