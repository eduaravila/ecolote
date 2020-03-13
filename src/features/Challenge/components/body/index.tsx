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
  CANCEL_COLOR,
  CANCEL_COLOR_DARK,
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import goGameCheck from '../../../../navigation/navigators/GameCheck';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {H5Title} from '../../../../components/H5Title/H5Title';
import goGame from '../../../../navigation/navigators/Game';

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

const MY_COMPLETED_CHALLENGES_GQL = gql`
  query MyCompletedChallenges {
    MyCompletedChallenges {
      _id
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
        _id
        portrait
        description
        minPoints
      }
    }
  }
`;

const GET_CHALLENGE_GQL = gql`
  query GetChallenge(
    $currentChallenge: String
    $completedChallenges: [ChallengeId!]
    $Arena: ID!
    $Last: String
  ) {
    GetChallenge(
      RandomChallenge: {
        currentChallenge: $currentChallenge
        completedChallenges: $completedChallenges
        Arena: $Arena
        Last: $Last
      }
    ) {
      _id
      title
      subtitle
      portrait
      badges {
        type {
          _id
          updated_at
          name
          image
        }
        zone {
          _id
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
`;

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
}

const Body: React.FC<BodyType> = ({toggle_visibility, loading}) => {
  const [areanSize] = useState(new Animated.Value(0));
  const [lastRecomended, setLastRecomended] = useState(null);
  let {mediaToken} = useStoreState(state => state.credentials);

  let [
    GetChallenge,
    {
      data: data_GetChallenge,
      loading: loading_GetChallenge,
      error: error_GetChallenge,
      networkStatus: networkStatus_GetChallenge,
    },
  ] = useLazyQuery(GET_CHALLENGE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      setLastRecomended(e.GetChallenge._id);
      console.log('====================================');
      console.log(e);
      console.log('====================================');
      if (loading) {
        toggle_visibility(false);
        goGame({
          ...e.GetChallenge,
          currentChallenge: data ? data.MyCurrentChallenge.Challenge._id : null,
          Arena: data_current_arena.MyArena.currentArena._id,
          Last: lastRecomended,
        });
      }
      console.log(e);
    },
  });

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
  let [
    myCompletedChallenges,
    {
      data: data_completed_challenges,
      loading: loading_completed_challenges,
      error: error_completed_challenges,
      networkStatus: networkStatus_completed_challenges,
    },
  ] = useLazyQuery(MY_COMPLETED_CHALLENGES_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      GetChallenge({
        variables: {
          currentChallenge: data ? data.MyCurrentChallenge.Challenge._id : null,
          completedChallenges:
            e.MyCompletedChallenges.length > 0 ? e.MyCompletedChallenges : null,
          Arena: data_current_arena.MyArena.currentArena._id,
          Last: lastRecomended,
        },
      });
      console.log(e);
    },
  });

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
    console.log('====================================');
    console.log(loading);
    console.log('====================================');
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
        disabled={
          (!loading && loading_arena_points) ||
          loading_current_challenge ||
          loading_GetChallenge ||
          loading_current_arena
        }
        onPress={() => {
          if (loading) {
            toggle_visibility(false);
            return;
          }
          myCompletedChallenges();
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
