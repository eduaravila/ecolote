import React, {useRef, useState, Fragment} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn, normalize} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import {PRIMARY_COLOR} from '../../../style/COLOR';
import {LoadingLogo} from '../../../components/LoadingLogo/LoadingLogo';
import {MiniButton} from '../../../components/MiniButton/MiniButton';
import {useStoreActions, useStoreState} from '../../../state/store';
import goDashboard from '../../../navigation/navigators/Dashboard';
import {OfflineLogo} from '../../../components/OfflineLogo/OfflineLogo';
import {pushStackWithProps} from '../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_DESCRIPTION} from '../../../navigation/screen_names';

interface GameTypes {
  componentId: string;
  Last: string;
  Arena: string[];
  currentChallenge: string;
  _id: string;
  title: string;
  description: string[];
  portrait: string;
  subtitle: string;
  badges: {
    type: {
      _id: string;
      name: string;
      image: string;
    };
    zone: {
      _id: string;
      name: string;
      image: string;
    };
    rarity: {
      _id: string;
      color: string;
      name: string;
      image: string;
    };
  };
}

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
      description
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
          color
          image
        }
      }
    }
  }
`;

const MY_COMPLETED_CHALLENGES_GQL = gql`
  query MyCompletedChallenges {
    MyCompletedChallenges {
      _id
      Challenge {
        _id
      }
    }
  }
`;

const Game: React.FC<GameTypes> = props => {
  const [canceled, setcanceled] = useState(false);
  const [lastState, setlastState] = useState<GameTypes>(props);
  let {online, refetch} = useStoreState(state => state.network);

  const [lastRecomended, setLastRecomended] = useState(props.Last);
  const [searching, setsearching] = useState<boolean>(false);
  const [newChallenge, setnewChallenge] = useState<boolean>(false);

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
      if (!canceled) {
        setLastRecomended(e.GetChallenge._id);
        setnewChallenge(true);
        setsearching(false);
        setlastState(i => ({...i, ...e.GetChallenge}));
      }
      setcanceled(false);
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
      GetChallenge({
        variables: {
          currentChallenge: props.currentChallenge,
          completedChallenges:
            e && e.MyCompletedChallenges.length > 0
              ? [...e.MyCompletedChallenges.map((i: any) => i.Challenge)]
              : null,
          Arena: props.Arena,
          Last: lastRecomended ? lastRecomended : props.Last,
        },
      });
    },
  });

  const _cancel_search = () => {
    setcanceled(true);
    setsearching(false);
  };
  const _toggle_searching = () => {
    setsearching(true);
    myCompletedChallenges();
  };
  console.log(data_GetChallenge);
  const setVisibilityBottom = useStoreActions(
    state => state.BottomNavigation.BottomNavigationSetVisity,
  );
  return (
    <GradientBackgroundNormal
      rarity={lastState.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={lastState.badges.rarity.color} />
      <MiniButton
        onPress={() => {
          setVisibilityBottom({show: false});
          goDashboard();
        }}
        iconName={'arrow-left-drop-circle'}
        style={{
          alignSelf: 'flex-end',
          marginVertical: normalize(10),
          // marginHorizontal: normalize(10),
          backgroundColor: PRIMARY_COLOR,
          borderRadius: normalize(20),
          padding: normalize(5),
        }}>
        Volver
      </MiniButton>
      {online && refetch ? (
        <Fragment>
          {searching ? (
            <LoadingLogo />
          ) : (
            <Fragment>
              <Header title={lastState.title} portrait={lastState.portrait} />
              <Body
                subtitle={lastState.subtitle}
                componentId={props.componentId}
                type={lastState.badges.type}
                zone={lastState.badges.zone}
                rarity={lastState.badges.rarity}
              />
            </Fragment>
          )}
          <Footer
            loading={searching}
            componentId={props.componentId}
            _toggle_searching={_toggle_searching}
            _cancel_search={_cancel_search}
            onPress={() =>
              pushStackWithProps(
                props.componentId,
                ECOLOTE_GAME_DESCRIPTION,
                {...lastState},
                {
                  customTransition: {
                    animations: [
                      {
                        type: 'sharedElement',
                        fromId: 'headergame',
                        toId: 'headergamedescription',
                        startDelay: 0,
                        springVelocity: 0.2,
                        duration: 0.5,
                      },
                    ],
                    duration: 0.8,
                  },
                },
              )
            }
          />
        </Fragment>
      ) : (
        <OfflineLogo
          onPress={() => {
            _toggle_searching();
          }}
        />
      )}
    </GradientBackgroundNormal>
  );
};

export default Game;
