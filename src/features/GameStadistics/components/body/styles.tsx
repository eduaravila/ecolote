import {StyleSheet} from 'react-native';
import {normalize} from '../../../../style/UTILS';

export const styles = StyleSheet.create({
  title: {marginVertical: normalize(30), textAlign: 'center'},
  sendButton: {
    marginVertical: normalize(10),
    width: '100%',
  },
  userInput: {
    marginVertical: normalize(10),
    color: 'black',
  },
  descriptionText: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: normalize(10),
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },

  container: {
    marginVertical: normalize(10),
  },
  right: {
    flex: 1,
    textAlign: 'right',
  },
  left: {
    flex: 1,
    textAlign: 'left',
  },
  bonus: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginVertical: normalize(10),
  },
  total: {
    textAlign: 'right',
    marginVertical: normalize(10),
    fontSize: normalize(46),
  },
  grade: {
    textAlign: 'center',
    marginVertical: normalize(10),
    fontSize: normalize(46),
    textDecorationLine: 'underline',
  },
});
