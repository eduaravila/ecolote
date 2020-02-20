import React, {useRef} from 'react';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';

interface GameComentaryTypes {
  componentId: string;
}
const GameComentary: React.FC<GameComentaryTypes> = props => {
  return (
    <GradientBackgroundNormal
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <Header componentId={props.componentId} />
      <Body componentId={props.componentId} />
      <Footer componentId={props.componentId} />
    </GradientBackgroundNormal>
  );
};

export default GameComentary;
