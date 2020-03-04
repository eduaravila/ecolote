import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Body from '../components/body';
import {PRIMARY_LIGHT_COLOR, PRIMARY_DARK_COLOR} from '../../../style/COLOR';
import {getColumn} from '../../../style/UTILS';

interface TutorialTypes {
  componentId: string;
}
const Tutorial: React.FC<TutorialTypes> = props => {
  return (
    <GradientBackground
      colors={[PRIMARY_DARK_COLOR, PRIMARY_DARK_COLOR]}
      style={{paddingLeft: getColumn(0), paddingRight: getColumn(0)}}>
      <Body componentId={props.componentId} />
    </GradientBackground>
  );
};

export default Tutorial;
