import {StyleSheet} from 'react-native';

import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    marginTop: normalize(40),
  },
  iconBack: {
    fontWeight: 'bold',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
});
