import {StyleSheet} from 'react-native';
import {normalize} from '../../style/UTILS';

export const styles = StyleSheet.create({
  container: {
    width: normalize(75),
    height: normalize(50),
    marginBottom: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: 'transparent',
    resizeMode: 'contain',

  },
  optionsContainer: {
    width: normalize(210),
    height: normalize(160),
    borderRadius: normalize(10),
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: normalize(40),
    color: 'red',
    padding: normalize(5),
    backgroundColor: 'white',
    borderRadius: normalize(50),
  },
  backdropDelete: {
    position: 'absolute',
    backgroundColor: 'grey',
    opacity: 0.5,
    width: '100%',
    height: '100%',
    borderRadius: normalize(5),
  },
});
