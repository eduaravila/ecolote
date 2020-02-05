import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Status from '../components/status';
import Body from '../components/body';
import Footer from '../components/footer';

interface componentIdType {
  componentId: string;
}

const SingUpEmail: React.FC<componentIdType> = props => {
  return (
    <GradientBackground>
      <Header />
      <Status componentId={props.componentId!} />
      <Body componentId={props.componentId!} />
      <Footer />
    </GradientBackground>
  );
};

export default SingUpEmail;
