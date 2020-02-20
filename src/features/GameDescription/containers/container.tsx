import React, {useRef} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';

interface GameDescrptionTypes {
  componentId: string;
}
const GameDescrption: React.FC<GameDescrptionTypes> = props => {
  return (
    <GradientBackgroundNormal
      style={{paddingLeft: getColumn(0.5), paddingRight: getColumn(0.5)}}>
      <Header componentId={props.componentId} />
      <Body componentId={props.componentId} />
      <Footer />
    </GradientBackgroundNormal>
  );
};

export default GameDescrption;
