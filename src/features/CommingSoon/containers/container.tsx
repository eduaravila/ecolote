import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Body from '../components/body/index';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {getColumn} from '../../../style/UTILS';

const ComingSoon: React.FC = () => {
  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      <Body />
    </GradientBackground>
  );
};

export default ComingSoon;
