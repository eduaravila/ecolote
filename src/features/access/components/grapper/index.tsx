import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import Header from '../header';
import GradientBackground from '../../../../components/GradientBackground/GradientBackground';

const Access: React.FC = () => {
  return (
    <GradientBackground>
      <Header />
    </GradientBackground>
  );
};

export default Access;
