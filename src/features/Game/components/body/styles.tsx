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
    textAlign: 'justify',
    marginVertical: normalize(10),
  },
  textBold: {
    fontFamily: 'Rubik-Bold',
  },
  badgeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(20),
  },
  container: {
    marginVertical: normalize(10),
  },
});
