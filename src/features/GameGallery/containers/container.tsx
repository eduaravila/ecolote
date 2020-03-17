import React, {useRef} from 'react';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';

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
const GameGallery: React.FC<GameGalleryTypes> = props => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <GradientBackgroundNormal
      rarity={props.Challenge.badges.rarity.name}
      style={{paddingLeft: getColumn(0.0), paddingRight: getColumn(0.0)}}>
      <StatusBar backgroundColor={props.Challenge.badges.rarity.color} />
      <Header componentId={props.componentId} title={props.Challenge.title} />
      <Body
        componentId={props.componentId}
        rarity={props.Challenge.badges.rarity}
      />
      <Footer componentId={props.componentId} />
    </GradientBackgroundNormal>
  );
};

export default GameGallery;
