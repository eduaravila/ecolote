import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';

interface LogInTypes {
  componentId: string;
}
const LogIn: React.FC<LogInTypes> = props => {
  return (
    <GradientBackground>
      <Header />
      <Body componentId={props.componentId} />
      <Footer componentId={props.componentId} />
    </GradientBackground>
  );
};

export default LogIn;
