import React, {useRef, useState, Fragment} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import {PRIMARY_COLOR} from '../../../style/COLOR';
import {LoadingLogo} from '../../../components/LoadingLogo/LoadingLogo';

interface GameTypes {
  componentId: string;
  Last: string;
  Arena: string;
  currentChallenge: string;
  _id: string;
  title: string;
  description: string;
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
    }
  }
`;

const Game: React.FC<GameTypes> = props => {
  const [canceled, setcanceled] = useState(false);
  const [lastState, setlastState] = useState<GameTypes>(props);

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
            e.MyCompletedChallenges.length > 0 ? e.MyCompletedChallenges : null,
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

  return (
    <GradientBackgroundNormal
      rarity={lastState.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={lastState.badges.rarity.color} />

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
      />
    </GradientBackgroundNormal>
  );
};

export default Game;
