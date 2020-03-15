import React, {useState, useEffect, Fragment} from 'react';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {MEDIA_API} from 'react-native-dotenv';

import Body from '../components/body/index';
import Head from '../components/header';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {getColumn} from '../../../style/UTILS';
import {useStoreActions, useStoreState} from '../../../state/store';
import Footer from '../components/footer';
import goGame from '../../../navigation/navigators/Game';
import {OfflineLogo} from '../../../components/OfflineLogo/OfflineLogo';

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
      description
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

const MY_WALLET_GQL = gql`
  query MyWallet {
    MyWallet {
      _id
      Coins {
        total
      }
      Level {
        total
      }
      Trophys {
        total
      }
      User {
        username
      }
    }
  }
`;

const Challenge: React.FC = () => {
  const [searching, setsearching] = useState<boolean>(false);
  const [lastRecomended, setLastRecomended] = useState(null);
  const [delayLoading, setdelayLoading] = useState(true);
  let {mediaToken} = useStoreState(state => state.credentials);
  let {online, refetch} = useStoreState(state => state.network);
  let {setRefetch} = useStoreActions(state => state.network);

  const setVisibilityBottom = useStoreActions(
    state => state.BottomNavigation.BottomNavigationSetVisity,
  );
  const {show} = useStoreState(state => state.BottomNavigation);

  const _toggle_searching = (e: boolean) => {
    setsearching(i => !i);
    setVisibilityBottom({show: e});
  };

  let {
    loading,
    error: error_my_wallet,
    data: data_my_wallet,
    refetch: refetch_my_wallet,
  } = useQuery(MY_WALLET_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      // console.log(e);
    },
  });

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
      if (searching) {
        setLastRecomended(e.GetChallenge._id);
        _toggle_searching(false);
        goGame({
          ...e.GetChallenge,
          currentChallenge:
            data && data.MyCurrentChallenge
              ? data.MyCurrentChallenge.Challenge._id
              : null,
          Arena: data_current_arena.MyArena.currentArena._id,
          Last: e.GetChallenge._id,
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

  let {
    loading: loading_current_challenge,
    error,
    data,
    refetch: refetch_my_current_challenge,
  } = useQuery(MY_CURRENT_CHALLENGE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      console.log(e);
    },
  });
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
      if (data_current_arena) {
        GetChallenge({
          variables: {
            currentChallenge:
              !!data && !!data.MyCurrentChallenge
                ? data.MyCurrentChallenge.Challenge._id
                : null,
            completedChallenges:
              e && e.MyCompletedChallenges.length > 0
                ? e.MyCompletedChallenges
                : null,
            Arena: data_current_arena.MyArena.currentArena._id,
            Last: lastRecomended,
          },
        });
      }
      console.log(e);
    },
  });

  let {
    loading: loading_arena_points,
    error: error_arena_points,
    data: data_arena_points,
    refetch: refetch_my_arena_coins,
  } = useQuery(ARENA_COINS_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      if (e) {
        let {ArenaPoins} = e;
        MyArena({variables: {arenas: ArenaPoins.msg}});
      }
    },
  });

  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      {online && refetch ? (
        <Fragment>
          <Head show={searching} data={data_my_wallet} />
          <Body
            data={!!data && data.MyCompletedChallenges}
            error={!!error}
            data_current_arena={data_current_arena}
            toggle_visibility={_toggle_searching}
            loading={searching}
            disabled={
              (!searching && loading_arena_points) ||
              loading_current_challenge ||
              loading_GetChallenge ||
              loading_current_arena ||
              !!error_arena_points
            }
            startSearch={myCompletedChallenges}
          />
          <Footer show={!searching} />
        </Fragment>
      ) : (
        <OfflineLogo
          onPress={() => {
            refetch_my_arena_coins();
            refetch_my_current_challenge();
            refetch_my_wallet();
          }}
        />
      )}
    </GradientBackground>
  );
};

export default Challenge;
