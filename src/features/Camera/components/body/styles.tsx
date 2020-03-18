import {StyleSheet} from 'react-native';
import {normalize, getColumn} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    height: '100%',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  description: {
    width: '100%',
    textAlign: 'center',
    marginVertical: normalize(10),
  },
  go: {
    flex: 1,
  },
  controllers: {
    position: 'absolute',
    bottom: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
