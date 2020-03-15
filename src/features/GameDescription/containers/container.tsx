import React, {useRef, useEffect, useState} from 'react';
import {MEDIA_API} from 'react-native-dotenv';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar, View} from 'react-native';
import {useStoreState} from '../../../state/store';
import goDashboard from '../../../navigation/navigators/Dashboard';

const ADD_CURRENT_CHALLENGE_GQL = gql`
  mutation AddCurrentChallenge($Challenge: ID!) {
    AddCurrentChallenge(NewCurrentChallenge: {Challenge: $Challenge}) {
      msg
      code
    }
  }
`;

interface GameDescrptionTypes {
  componentId: string;
  Last: string;
  Arena: string;
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
const GameDescrption: React.FC<GameDescrptionTypes> = props => {
  let [AddCurrentChallenge, {data, loading, error}] = useMutation(
    ADD_CURRENT_CHALLENGE_GQL,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: e => {
        if (!error) {
          goDashboard();
        }
      },
    },
  );

  let {mediaToken} = useStoreState(state => state.credentials);
  const [articles, setArticles] = useState<{name: string; txt: string}[]>([]);
  const [loadingArticles, setloadingArticles] = useState(true);
  useEffect(() => {
    const getArticles = async () => {
      await Promise.all(
        props.description.map(async i => {
          let e = await fetch(MEDIA_API + 'article/' + i, {
            headers: {
              token: mediaToken,
            },
          });
          let y = await e.text();
          // console.log(y);

          setArticles((pass: any) => [
            ...pass,
            {name: i, txt: y.replace('{{token}}', mediaToken)},
          ]);
        }),
      );
      console.log('articles', articles);

      setArticles(i => i.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setloadingArticles(false);
    };
    getArticles();
  }, [props]);

  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <GradientBackgroundNormal
      rarity={props.badges.rarity.name}
      style={{paddingLeft: getColumn(0), paddingRight: getColumn(0)}}>
      <StatusBar backgroundColor={props.badges.rarity.color} />
      <Header
        componentId={props.componentId}
        title={props.title}
        {...props.badges}
      />
      <Body
        componentId={props.componentId}
        length={articles.length}
        data={articles}
        setactiveIndex={setactiveIndex}
        activeIndex={activeIndex}
        rarity={props.badges.rarity.name}
        loading={loadingArticles}
      />
      <View style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
        <Footer
          loading={loading}
          ready={activeIndex == props.description.length - 1}
          onPress={() => {
            AddCurrentChallenge({variables: {Challenge: props._id}});
          }}
          onPressNext={() => {
            setactiveIndex(i => i + 1);
          }}
        />
      </View>
    </GradientBackgroundNormal>
  );
};

export default GameDescrption;
