import React from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body/index';
import {ModalCode} from '../components/modal';

interface componentIdType {
  componentId: string;
}

const SingUpCode: React.FC<componentIdType> = props => {
  return (
    <GradientBackground>
      <Header componentId={props.componentId} />
      <Body componentId={props.componentId} />
      <ModalCode />
    </GradientBackground>
  );
};

export default SingUpCode;
