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
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import goGameCheck from '../../../../navigation/navigators/GameCheck';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {H5Title} from '../../../../components/H5Title/H5Title';
import goGame from '../../../../navigation/navigators/Game';
import {LoadingLogo} from '../../../../components/LoadingLogo/LoadingLogo';

const replace_icon = require('../../../../assets/img/replace.png');

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
  data: boolean;
  error: boolean;
  data_current_arena: any;
  disabled: boolean;
  startSearch: () => void;
}

const Body: React.FC<BodyType> = ({
  toggle_visibility,
  loading,
  data,
  error,
  data_current_arena,
  disabled,
  startSearch,
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

  return (
    <View style={styles.container}>
      {data && !error ? (
        <Animated.View style={styles.currentGameContainer}>
          <Subtitle2 style={styles.currentGameContainerTitle}>
            Reto actual:
          </Subtitle2>
          <TouchableScale
            tension={100}
            friction={1}
            onPress={() => goGameCheck()}>
            <StatContainer
              style={styles.gameCardContainer}
              contentStyle={styles.gameCardContainerContent}
              borderStyle={{backgroundColor: STAT_LABEL_COLOR}}
              styleJr={styles.gameCardContainerJr}>
              <Subtitle2 style={styles.gameCardContainerBadgesTitle}>
                Di adios a las toallitas humedas
              </Subtitle2>
              <View style={styles.gameCardContainerBadgesContainer}>
                <GameBadge
                  color={REPLACE_COLOR}
                  logo={''}
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={BATHROOM_COLOR}
                  logo={''}
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={PRIMARY_DARK_COLOR}
                  logo={''}
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
      <ColorButton
        topColor={loading ? CANCEL_COLOR : NEXT_COLOR}
        middleColor={loading ? CANCEL_COLOR_DARK : NEXT_COLOR_DARK}
        loading={loading}
        disabled={disabled}
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
    </View>
  );
};

export default Body;
