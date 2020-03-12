import React, {useState, useEffect} from 'react';
import {View, Animated, Easing, ActivityIndicator} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
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
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import goGameCheck from '../../../../navigation/navigators/GameCheck';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {H6Title} from '../../../../components/H6Title/H6Title';

const arena_logo = require('../../../../assets/img/aqua_palace.gif');
const replace_icon = require('../../../../assets/img/replace.png');

const MY_CURRENT_CHALLENGE_GQL = gql`
  query MyCurrentChallenge {
    MyCurrentChallenge {
      _id
      Challenge {
        _id
        title
        badges {
          type {
            name
            image
          }
          zone {
            name
            image
          }
          rarity {
            name
            image
          }
        }
      }
    }
  }
`;

const ARENA_COINS_GQL = gql`
  query ArenaPoins {
    ArenaPoins {
      msg
      code
    }
  }
`;

const MY_CURRENT_ARENA_GQL = gql`
  query MyArena($arenas: String!) {
    MyArena(arenas: $arenas) {
      availableArenas {
        name
      }
      currentArena {
        name
        portrait
        description
        minPoints
      }
    }
  }
`;

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
}

const Body: React.FC<BodyType> = ({toggle_visibility, loading}) => {
  const [areanSize] = useState(new Animated.Value(0));

  let {mediaToken} = useStoreState(state => state.credentials);

  let [
    MyArena,
    {
      data: data_current_arena,
      loading: loading_current_arena,
      error: error_current_arena,
      networkStatus,
    },
  ] = useLazyQuery(MY_CURRENT_ARENA_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      console.log(
        e,
        MEDIA_API +
          data_current_arena.MyArena.currentArena.portrait +
          '/image/' +
          mediaToken,
      );
    },
  });

  let {loading: loading_current_challenge, error, data} = useQuery(
    MY_CURRENT_CHALLENGE_GQL,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      onCompleted: e => {},
    },
  );

  let {
    loading: loading_arena_points,
    error: error_arena_points,
    data: data_arena_points,
  } = useQuery(ARENA_COINS_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      let {ArenaPoins} = e;
      MyArena({variables: {arenas: ArenaPoins.msg}});
    },
  });

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
                  logo={replace_icon}
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={BATHROOM_COLOR}
                  logo={replace_icon}
                  style={styles.gameCardContainerBadge}
                />
                <GameBadge
                  color={PRIMARY_DARK_COLOR}
                  logo={replace_icon}
                  style={styles.gameCardContainerBadge}
                />
              </View>
            </StatContainer>
          </TouchableScale>
        </Animated.View>
      ) : (
        <Subtitle2 style={styles.noChallengeSubtitle}>
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
            <H6Title style={styles.arenaTitle}>
              {data_current_arena.MyArena.currentArena.name}
            </H6Title>
          </Animated.View>
        ) : (
          <ActivityIndicator size="large" color={PRIMARY_LIGHT_COLOR} />
        )}
      </TouchableScale>
      <ColorButton
        topColor={NEXT_COLOR}
        middleColor={NEXT_COLOR_DARK}
        onPress={() => toggle_visibility(true)}
        cancel={loading}
        style={loading ? styles.cancelButton : styles.playButton}>
        {loading ? 'Cancelar ' : 'Jugar!'}
      </ColorButton>
    </View>
  );
};

export default Body;
