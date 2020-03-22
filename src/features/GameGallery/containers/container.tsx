import React, {useRef, useState, Fragment} from 'react';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import {ReactNativeFile} from 'apollo-upload-client';

import {client_media} from '../../../api/index';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn, normalize} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import store, {useStoreState, useStoreActions} from '../../../state/store';
import goGameStadistics from '../../../navigation/navigators/GameStadistics';
import {LoadingLogo} from '../../../components/LoadingLogo/LoadingLogo';
import {Subtitle1} from '../../../components/Subtitle1/Subtitle1';
import {Subtitle2} from '../../../components/Subtitle2/Subtitle2';

interface GameGalleryTypes {
  componentId: string;
  commentary: string;
  Challenge: {
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
  };
}

const NEW_COMMENTARY_GQL = gql`
  mutation NewCommentary($commentary: String, $Challenge: ID!) {
    NewCommentary(
      newCommentary: {commentary: $commentary, Challenge: $Challenge}
    ) {
      token
    }
  }
`;

const UPLOAD_TICKET_FILE_GQL = gql`
  mutation UploadImage($file: [Upload!]!) {
    uploadImage(file: $file) {
      msg
      code
      token
    }
  }
`;

const CLOSE_CHALLENGE_GQL = gql`
  mutation CloseChallenge($lastChallenge: String) {
    CloseChallenge(lastChallenge: $lastChallenge) {
      msg
      token
      code
    }
  }
`;

const COMPLETE_CHALLENGE_GQL = gql`
  mutation CompleteChallenge(
    $commentary: String
    $media: String
    $challenge: String!
  ) {
    CompleteChallenge(
      completeChallenge: {
        commentary: $commentary
        media: $media
        challenge: $challenge
      }
    ) {
      msg
      stats {
        Challenge
        Commentary
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
        start_date
        total_time
        end_date
      }
      code
    }
  }
`;

const GET_CHALLENGE_POINTS_GQL = gql`
  mutation GetChallengePoints($CurrentChallengeoToken: String) {
    GetChallengePoints(CurrentChallengeoToken: $CurrentChallengeoToken) {
      msg
      token
    }
  }
`;

const ADD_HISTORY_GQL = gql`
  mutation addHistory(
    $media: [String!]
    $Challenge: String!
    $Commentary: ID
    $Points: PointsInput!
    $start_date: String
    $end_date: String
    $total_time: String
  ) {
    addHistory(
      NewHistory: {
        media: $media
        Challenge: $Challenge
        Commentary: $Commentary
        Points: $Points
        start_date: $start_date
        total_time: $total_time
        end_date: $end_date
      }
    ) {
      msg
    }
  }
`;

const GameGallery: React.FC<GameGalleryTypes> = props => {
  let {photos} = useStoreState(i => i.photos);
  let {cleanPhotos} = useStoreActions(i => i.photos);
  const [points, setpoints] = useState(null);
  const [loading, setLoading] = useState(false);

  let [
    UploadImage,
    {
      data: data_upload_images,
      loading: loading_upload_images,
      error: error_upload_images,
    },
  ] = useMutation(UPLOAD_TICKET_FILE_GQL, {
    client: client_media,
    notifyOnNetworkStatusChange: true,
    onError: e => {
      console.log(e);
    },
    onCompleted: e => {
      CloseChallenge({variables: {lastChallenge: props.Challenge._id}});
    },
  });

  let [
    NewCommentary,
    {
      data: data_new_commentary,
      loading: loading_new_commentary,
      error: error_new_commentary,
    },
  ] = useMutation(NEW_COMMENTARY_GQL, {
    notifyOnNetworkStatusChange: true,

    onCompleted: async e => {
      let photoArray = photos.map(
        i =>
          new ReactNativeFile({
            uri: i.uri,
            name: i.name + '.jpg',
            type: 'image/jpg',
          }),
      );

      UploadImage({
        variables: {
          file: photoArray,
        },
      });
    },
  });

  let [
    addHistory,
    {data: data_history, loading: loading_history, error: error_history},
  ] = useMutation(ADD_HISTORY_GQL, {
    notifyOnNetworkStatusChange: true,
    onError: e => {
      console.log(e);
    },
    onCompleted: e => {
      setLoading(false);
      cleanPhotos(null);
      goGameStadistics({...props, points});
    },
  });

  let [
    CompleteChallenge,
    {
      data: data_complete_challenge,
      loading: loading_complete_challenge,
      error: error_complete_challenge,
    },
  ] = useMutation(COMPLETE_CHALLENGE_GQL, {
    notifyOnNetworkStatusChange: true,
    onError: e => {
      console.log(e);
    },
    onCompleted: e => {
      setpoints(e.CompleteChallenge.stats.Points);
      addHistory({
        variables: {
          media: data_upload_images ? data_upload_images.uploadImage.msg : null,
          Challenge: e.CompleteChallenge.stats.Challenge,
          Commentary: e.CompleteChallenge.stats.Commentary,
          Points: e.CompleteChallenge.stats.Points,
          start_date: e.CompleteChallenge.stats.start_date,
          end_date: e.CompleteChallenge.stats.end_date,
          total_time: e.CompleteChallenge.stats.total_time,
        },
      });
    },
  });

  let [
    GetChallengePoints,
    {
      data: data_challenge_points,
      loading: loading_challenge_points,
      error: error_challenge_points,
    },
  ] = useMutation(GET_CHALLENGE_POINTS_GQL, {
    notifyOnNetworkStatusChange: true,
    onError: e => {
      console.log(e);
    },
    onCompleted: e => {
      console.log(e, data_new_commentary, data_upload_images);
      CompleteChallenge({
        variables: {
          commentary: data_new_commentary
            ? data_new_commentary.NewCommentary.token
            : null,
          media: data_upload_images
            ? data_upload_images.uploadImage.token
            : null,
          challenge: e.GetChallengePoints.token,
        },
      });
    },
  });

  var [
    CloseChallenge,
    {
      data: data_close_challenge,
      loading: loading_close_challenge,
      error: error_close_challenge,
    },
  ] = useMutation(CLOSE_CHALLENGE_GQL, {
    notifyOnNetworkStatusChange: true,
    onError: e => {
      console.log(e);
    },
    onCompleted: e => {
      console.log(e);
      GetChallengePoints({
        variables: {
          CurrentChallengeoToken: e.CloseChallenge.token,
        },
      });
    },
  });

  const close_challenge = () => {
    setLoading(true);
    if (!!props.commentary) {
      NewCommentary({
        variables: {
          commentary: props.commentary,
          Challenge: props.Challenge._id,
        },
      });
      return;
    } else if (photos.length > 0) {
      let photoArray = photos.map(
        i =>
          new ReactNativeFile({
            uri: i.uri,
            name: i.name + '.jpg',
            type: 'image/jpg',
          }),
      );
      UploadImage({
        variables: {
          file: photoArray,
        },
      });
      return;
    } else {
      CloseChallenge({variables: {lastChallenge: props.Challenge._id}});
      return;
    }
  };

  return (
    <GradientBackgroundNormal
      rarity={props.Challenge.badges.rarity.name}
      style={{paddingLeft: getColumn(0.0), paddingRight: getColumn(0.0)}}>
      <StatusBar backgroundColor={props.Challenge.badges.rarity.color} />
      {loading ? (
        <LoadingLogo>
          {error_new_commentary ||
          error_upload_images ||
          error_challenge_points ||
          error_close_challenge ||
          error_complete_challenge ? (
            <Fragment>
              <Subtitle2>Algo salio mal 🎭</Subtitle2>
              <Subtitle1
                onPress={() => {
                  close_challenge();
                }}
                style={{
                  textDecorationLine: 'underline',
                  marginVertical: normalize(15),
                  fontFamily: 'Rubik-Bold',
                }}>
                Reintentar
              </Subtitle1>
            </Fragment>
          ) : (
            <></>
          )}
        </LoadingLogo>
      ) : (
        <Fragment>
          <Header
            componentId={props.componentId}
            title={props.Challenge.title}
          />
          <Body
            componentId={props.componentId}
            rarity={props.Challenge.badges.rarity}
          />
          <Footer
            componentId={props.componentId}
            onPress={() => close_challenge()}
          />
        </Fragment>
      )}
    </GradientBackgroundNormal>
  );
};

export default GameGallery;
