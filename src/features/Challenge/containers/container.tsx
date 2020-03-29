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
import {OptionsModal} from '../components/optionsModal';
import {HistoryModal} from '../components/historyModal';
import {ConfigurationModal} from '../components/configurationModal';

const MY_CURRENT_CHALLENGE_GQL = gql`
  query MyCurrentChallenge {
    MyCurrentChallenge {
      _id
      Challenge {
        _id
        title
        subtitle
        description
        portrait
        badges {
          type {
            _id
            image
            name
            color
          }
          zone {
            _id
            image
            name
            color
          }
          rarity {
            _id
            image
            name
            color
          }
        }
      }
    }
  }
`;

const MY_COMPLETED_CHALLENGES_GQL = gql`
  query MyCompletedChallenges {
    MyCompletedChallenges {
      Challenge {
        _id
      }
    }
  }
`;

const MY_HISTORY_GQL = gql`
  query MyCompletedChallenges($page: Int, $size: Int) {
    MyCompletedChallenges(findInput: {page: $page, size: $size}) {
      _id
      media
      total_time
      end_date
      start_date
      Commentary {
        commentary
      }
      Points {
        total
        after24
        rarity
        completed
        trophys
        experience
        grade
        photos
        commentary
      }
      Challenge {
        _id
        title
        points
        description
        portrait

        arena {
          name
          portrait
          description
        }
        subtitle
        badges {
          type {
            _id
            name
            image
            color
          }
          zone {
            _id
            name
            image
            color
          }
          rarity {
            _id
            name
            image
            color
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
        _id
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
    $Arena: [ID!]!
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
interface ChallengeType {
  componentId: string;
}

const Challenge: React.FC<ChallengeType> = ({componentId}) => {
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
  const [history, setHistory] = useState<any>([]);

  const _toggle_searching = (e: boolean) => {
    setsearching(i => !i);
    setVisibilityBottom({show: e});
  };

  let [
    MyHistory,
    {
      data: data_my_history,
      loading: loading_my_history,
      error: error_my_history,
      networkStatus: networkStatus_my_history,
      refetch: refetch_my_history,
      fetchMore,
    },
  ] = useLazyQuery(MY_HISTORY_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      let new_page = page + 1;
      setpage(new_page);
      if (!e || !e.MyCompletedChallenges.length) {
        return;
      }
      if (e && e.MyCompletedChallenges)
        setHistory((i: any) => [...i, ...e.MyCompletedChallenges]);
    },
  });

  let {
    loading,
    error: error_my_wallet,
    data: data_my_wallet,
    refetch: refetch_my_wallet,
  } = useQuery(MY_WALLET_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
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
          Arena: [
            ...data_current_arena.MyArena.availableArenas.map(
              (i: any) => i._id,
            ),
          ],
          Last: e.GetChallenge._id,
        });
      }
    },
    onError: e => {
      _toggle_searching(false);
    },
  });

  let [
    MyArena,
    {
      data: data_current_arena,
      loading: loading_current_arena,
      error: error_current_arena,
      networkStatus,
      refetch: refetch_current_arena,
    },
  ] = useLazyQuery(MY_CURRENT_ARENA_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  let {
    loading: loading_current_challenge,
    error,
    data,
    refetch: refetch_my_current_challenge,
  } = useQuery(MY_CURRENT_CHALLENGE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
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
      console.log(e.MyCompletedChallenges.map(i => i.Challenge));

      if (data_current_arena) {
        GetChallenge({
          variables: {
            currentChallenge:
              !!data && !!data.MyCurrentChallenge
                ? data.MyCurrentChallenge.Challenge._id
                : null,
            completedChallenges:
              e && e.MyCompletedChallenges.length > 0
                ? [...e.MyCompletedChallenges.map((i: any) => i.Challenge)]
                : null,
            Arena: [
              ...data_current_arena.MyArena.availableArenas.map(
                (i: any) => i._id,
              ),
            ],
            Last: lastRecomended,
          },
        });
      }
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
    onError: e => {
      refetch_my_current_challenge();
    },
    onCompleted: e => {
      if (e) {
        let {ArenaPoins} = e;
        MyArena({variables: {arenas: ArenaPoins.msg}});
      }
    },
  });
  const [page, setpage] = useState(1);

  const [showOptions, setshowOptions] = useState(false);
  const _toggleShowOptions = (show: boolean) => {
    setshowOptions(show);
  };

  const [showCredits, setshowCredits] = useState(false);
  const _toggleshowCredits = (show: boolean) => {
    setshowCredits(show);
  };
  const [showConfigurations, setshowConfigurations] = useState(false);
  const _toggleshowConfigurations = (show: boolean) => {
    if (show) setshowOptions(false);
    setshowConfigurations(show);
  };

  const [showZoom, setshowZoom] = useState(false);
  const _toggleshowZoom = (show: boolean) => {
    setshowZoom(show);
  };

  const [showDetails, setshowDetails] = useState(false);
  const _toggleshowDetails = (show: boolean) => {
    setshowDetails(show);
  };
  const [showHistory, setshowHistory] = useState(false);
  const _toggleshowHistory = (show: boolean) => {
    if (show) {
      MyHistory({
        variables: {
          page: 0,
          size: 2,
        },
      });
      setpage(1);
      setHistory([]);
      setshowOptions(false);
    }
    setshowHistory(show);
  };
  const _refresh_history = () => {
    setpage(1);
    setHistory([]);
    MyHistory({
      variables: {
        page: 0,
        size: 2,
      },
    });
  };

  const _more_history = () => {
    MyHistory({
      variables: {
        page: page,
        size: 1,
      },
    });
  };

  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      {online && refetch ? (
        <Fragment>
          <Head
            retry={() => {
              refetch_current_arena();
              refetch_my_wallet();
            }}
            error={!!error || !!error_my_wallet}
            show={searching}
            data={data_my_wallet}
            toggleShow={_toggleShowOptions}
          />
          <OptionsModal
            show={showOptions}
            toggleShow={_toggleShowOptions}
            onPressHistory={_toggleshowHistory}
            onPressConfiguration={_toggleshowConfigurations}
          />
          <ConfigurationModal
            showCredits={showCredits}
            toggleShowCredits={_toggleshowCredits}
            show={showConfigurations}
            toggleShow={_toggleshowConfigurations}
          />
          <HistoryModal
            get_more={_more_history}
            _refresh_history={_refresh_history}
            showDetails={showDetails}
            _toggleshowDetails={_toggleshowDetails}
            showZoom={showZoom}
            _toggleshowZoom={_toggleshowZoom}
            componentId={componentId}
            show={showHistory}
            toggleShow={_toggleshowHistory}
            data={history ? history : []}
            loading={loading_my_history}
          />
          <Body
            retry={() => {
              refetch_current_arena();
            }}
            data={!!data}
            error={!!error || !!error_current_arena}
            currentChallenge={data}
            data_current_arena={data_current_arena}
            toggle_visibility={_toggle_searching}
            loading={searching}
            disabled={
              (!searching && loading_arena_points) ||
              loading_current_challenge ||
              loading_GetChallenge ||
              loading_current_arena ||
              !!error_arena_points ||
              !!error_current_arena
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
