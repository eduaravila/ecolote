import {StyleSheet} from 'react-native';

import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  sendcodeButton: {
    marginVertical: normalize(20),
    width: '90%',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  alertContainer: {
    height: 'auto',
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 0,
    marginVertical: normalize(20),
  },
  alertText: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  alertImage: {
    width: normalize(115),
    height: normalize(70),
  },
});
