import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';

interface GameTypes {
  componentId: string;
}
const Game: React.FC<GameTypes> = props => {
  return (
    <GradientBackgroundNormal
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <Header />
      <Body componentId={props.componentId} />
      <Footer /> 
    </GradientBackgroundNormal>
  );
};

export default Game;
