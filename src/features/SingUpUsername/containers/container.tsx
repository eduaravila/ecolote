import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Status from '../components/status';
import Body from '../components/body';

interface SignUpUsernameType {
  componentId: string;
}

const SignUpUsername: React.FC<SignUpUsernameType> = props => {
  return (
    <GradientBackground>
      <Header />
      <Status componentId={props.componentId} />
      <Body componentId={props.componentId} />
    </GradientBackground>
  );
};

export default SignUpUsername;
