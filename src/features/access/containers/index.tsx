import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer/index';

const Access: React.FC = props => {
  return (
    <GradientBackground>
      <Header />
      <Body {...props} />
      <Footer />
    </GradientBackground>
  );
};

export default Access;
