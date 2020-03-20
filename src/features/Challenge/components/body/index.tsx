import React, {useState, useEffect} from 'react';
import {View, Animated, Easing, ActivityIndicator} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import {MEDIA_API} from 'react-native-dotenv';

import {useStoreState} from '../../../../state/store';
import {styles} from './styles';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {normalize} from '../../../../style/UTILS';
import {StatContainer} from '../../../../components/StatContainer/StatContainer';
import {
  STAT_LABEL_COLOR,
  REPLACE_COLOR,
  BATHROOM_COLOR,
  PRIMARY_DARK_COLOR,
  NEXT_COLOR,
  NEXT_COLOR_DARK,
  PRIMARY_LIGHT_COLOR,
  CANCEL_COLOR,
  CANCEL_COLOR_DARK,
  HEY_COLOR,
  HEY_COLOR_DARK,
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import goGameCheck from '../../../../navigation/navigators/GameCheck';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {H5Title} from '../../../../components/H5Title/H5Title';
import goGame from '../../../../navigation/navigators/Game';
import {LoadingLogo} from '../../../../components/LoadingLogo/LoadingLogo';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';

const replace_icon = require('../../../../assets/img/replace.png');

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
  data: boolean;
  error: boolean;
  data_current_arena: any;
  disabled: boolean;
  currentChallenge: {
    MyCurrentChallenge: {
      _id: string;
      title: string;
      subtitle: string;
      description: string;
      portrait: string;
      Challenge: {
        _id: string;
        title: string;
        badges: {
          type: {
            _id: string;
            image: string;
            name: string;
            color: string;
          };
          zone: {
            _id: string;
            image: string;
            name: string;
            color: string;
          };
          rarity: {
            _id: string;
            image: string;
            name: string;
            color: string;
          };
        };
      };
    };
  };
  startSearch: () => void;
  retry: () => void;
}

const Body: React.FC<BodyType> = ({
  toggle_visibility,
  loading,
  data,
  error,
  data_current_arena,
  disabled,
  startSearch,
  currentChallenge,
  retry,
}) => {
  const [areanSize] = useState(new Animated.Value(0));
  let {mediaToken} = useStoreState(state => state.credentials);

  const goBig = () => {
    Animated.timing(areanSize, {
      duration: 500,
      toValue: 1,
      easing: Easing.elastic(3),
    }).start();
  };

  const goSmall = () => {
    Animated.timing(areanSize, {
      duration: 500,
      toValue: 0,
    }).start();
  };

  useEffect(() => {
    if (loading) {
      goBig();
    } else {
      goSmall();
    }
  }, [loading]);
  console.log('====================================');
  console.log(currentChallenge);
  console.log('====================================');
  return (
    <View style={styles.container}>
      {!!currentChallenge && currentChallenge.MyCurrentChallenge && !error ? (
        <Animated.View style={styles.currentGameContainer}>
          <Subtitle2 style={styles.currentGameContainerTitle}>
            Reto actual:
          </Subtitle2>
          <TouchableScale
            tension={100}
            friction={1}
            onPress={() =>
              goGameCheck({...currentChallenge.MyCurrentChallenge})
            }>
            <StatContainer
              style={styles.gameCardContainer}
              contentStyle={styles.gameCardContainerContent}
              borderStyle={{backgroundColor: STAT_LABEL_COLOR}}
              styleJr={styles.gameCardContainerJr}>
              <Subtitle2 style={styles.gameCardContainerBadgesTitle}>
                {currentChallenge.MyCurrentChallenge.Challenge.title}
              </Subtitle2>
              <View style={styles.gameCardContainerBadgesContainer}>
                <GameBadge
                  color={'white'}
                  logo={
                    MEDIA_API +
                    'image/' +
                    currentChallenge.MyCurrentChallenge.Challenge.badges.zone
                      .image +
                    '/' +
                    mediaToken
                  }
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={'white'}
                  logo={
                    MEDIA_API +
                    'image/' +
                    currentChallenge.MyCurrentChallenge.Challenge.badges.type
                      .image +
                    '/' +
                    mediaToken
                  }
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={PRIMARY_DARK_COLOR}
                  logo={
                    MEDIA_API +
                    'image/' +
                    currentChallenge.MyCurrentChallenge.Challenge.badges.rarity
                      .image +
                    '/' +
                    mediaToken
                  }
                  style={styles.gameCardContainerBadge}
                />
              </View>
            </StatContainer>
          </TouchableScale>
        </Animated.View>
      ) : (
        <Subtitle2
          style={[
            styles.noChallengeSubtitle,
            {
              display: loading ? 'none' : 'flex',
            },
          ]}>
          No tienes reto asignado
        </Subtitle2>
      )}
      {error && (
        <Subtitle1 onPress={retry} style={styles.retry}>
          Reintentar
        </Subtitle1>
      )}
      <TouchableScale style={styles.arenaContainer} tension={100} friction={1}>
        {data_current_arena ? (
          <Animated.View>
            <Animated.Image
              source={{
                uri:
                  MEDIA_API +
                  'image/' +
                  data_current_arena.MyArena.currentArena.portrait +
                  '/' +
                  mediaToken,
              }}
              style={[
                styles.arena,
                {
                  width: areanSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: [normalize(250), normalize(270)],
                  }),
                  height: areanSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: [normalize(250), normalize(270)],
                  }),
                },
              ]}
            />
            <Animated.View
              style={{
                opacity: areanSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              }}>
              <H5Title>{data_current_arena.MyArena.currentArena.name}</H5Title>
            </Animated.View>
          </Animated.View>
        ) : (
          <ActivityIndicator size="large" color={PRIMARY_LIGHT_COLOR} />
        )}
      </TouchableScale>
      {currentChallenge && currentChallenge.MyCurrentChallenge ? (
        <ColorButton
          topColor={loading ? CANCEL_COLOR : HEY_COLOR}
          middleColor={loading ? CANCEL_COLOR_DARK : HEY_COLOR_DARK}
          loading={loading}
          disabled={disabled}
          onPress={() => goGameCheck({...currentChallenge.MyCurrentChallenge})}
          cancel={loading}
          style={loading ? styles.cancelButton : styles.playButton}>
          Finalizar
        </ColorButton>
      ) : (
        <ColorButton
          topColor={loading ? CANCEL_COLOR : NEXT_COLOR}
          middleColor={loading ? CANCEL_COLOR_DARK : NEXT_COLOR_DARK}
          loading={loading}
          disabled={disabled || error}
          onPress={() => {
            if (loading) {
              toggle_visibility(false);
              return;
            }
            startSearch();
            toggle_visibility(true);
          }}
          cancel={loading}
          style={loading ? styles.cancelButton : styles.playButton}>
          {loading ? 'Cancelar' : 'Jugar!'}
        </ColorButton>
      )}
    </View>
  );
};

export default Body;
