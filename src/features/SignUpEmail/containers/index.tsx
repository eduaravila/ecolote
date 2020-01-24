import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Status from '../components/status';
import Body from '../components/body';
import Footer from '../components/footer';

const SingUpEmail: React.FC = props => {
  return (
    <GradientBackground>
      <Header />
      <Status {...props} />
      <Body />
      <Footer />
    </GradientBackground>
  );
};

export default SingUpEmail;
