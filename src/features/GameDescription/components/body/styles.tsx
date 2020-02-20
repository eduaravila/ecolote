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
    textAlign: 'left',
    marginVertical: normalize(20),
    fontSize: normalize(20),
    fontFamily: 'Rubik-Medium',
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  badgeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: normalize(20),
  },
  container: {
    marginVertical: normalize(30),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
