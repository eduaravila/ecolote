import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';

interface GameStadisticsTypes {
  componentId: string;
  commentary: string;
  points: {
    after24: string;
    commentary: string;
    completed: string;
    experience: string;
    grade: string;
    photos: string;
    rarity: string;
    total: string;
    trophys: string;
  };
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
const GameStadistics: React.FC<GameStadisticsTypes> = props => {
  console.log(props);

  return (
    <GradientBackgroundNormal
      rarity={props.Challenge.badges.rarity.name}
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <StatusBar backgroundColor={props.Challenge.badges.rarity.color} />
      <Header />
      <Body
        componentId={props.componentId}
        {...props.points}
        rarityName={props.Challenge.badges.rarity.name}
        title={props.Challenge.title}
      />
      <Footer componentId={props.componentId} />
    </GradientBackgroundNormal>
  );
};

export default GameStadistics;
