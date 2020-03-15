import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';

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
  console.log(props);

  return (
    <GradientBackgroundNormal
      rarity={props.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={props.badges.rarity.color} />
      <Header
        componentId={props.componentId}
        title={props.title}
        {...props.badges}
      />
      <Body
        componentId={props.componentId}
        length={props.description.length}
        data={props.description}
      />
      <Footer />
    </GradientBackgroundNormal>
  );
};

export default GameDescrption;
