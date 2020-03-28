import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // position: 'absolute',
    // bottom: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  go: {
    flex: 1,
  },
  another: {
    flex: 0.5,
    marginLeft: normalize(10),
  },
  anotherText: {
    fontSize: normalize(50),
  },
});
