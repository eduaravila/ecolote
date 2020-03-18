import React, {useRef} from 'react';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import {getColumn} from '../../../style/UTILS';
import {StatusBar} from 'react-native';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {PRIMARY_COLOR} from '../../../style/COLOR';

interface CameraTypes {
  componentId: string;
}
const Camera: React.FC<CameraTypes> = props => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.0), paddingRight: getColumn(0.0)}}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <Header componentId={props.componentId} />
      <Body componentId={props.componentId} />
    </GradientBackground>
  );
};

export default Camera;
