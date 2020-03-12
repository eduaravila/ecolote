import {StyleSheet} from 'react-native';
import {normalize, getColumn} from '../../../../style/UTILS';
import {STAT_LABEL_COLOR} from '../../../../style/COLOR';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(5),
  },
  noChallengeSubtitle: {
    marginVertical: normalize(10),
    textAlign: 'left',
    width: '90%',
  },
  arena: {
    width: normalize(250),
    height: normalize(250),
    resizeMode: 'contain',
  },
  arenaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(10),
    width: normalize(300),
    height: normalize(300),
  },
  arenaTitle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  playButton: {
    marginTop: normalize(10),
  },
  cancelButton: {
    marginTop: normalize(20),
  },
  gameCardContainer: {
    width: '100%',
    minHeight: normalize(75),
  },
  gameCardContainerJr: {
    width: '100%',
    height: '100%',
    padding: 0,
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
  },
  currentGameContainer: {
    width: '100%',

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: normalize(10),
  },
  currentGameContainerTitle: {
    marginVertical: normalize(10),
  },
  gameCardContainerBadgesContainer: {
    flexDirection: 'row',
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameCardContainerBadgesTitle: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: normalize(10),
  },
  gameCardContainerBadge: {
    width: normalize(30),
    height: normalize(30),
  },
  gameCardContainerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
});
