import {StyleSheet} from 'react-native';

import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginVertical: normalize(20),
    marginHorizontal: getColumn(0.5),
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
