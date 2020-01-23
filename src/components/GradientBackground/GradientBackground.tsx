import React, {useState, useEffect, Fragment} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientBackgroundType} from './types';
import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';
import {styles} from './styles';

const GradientBackground: React.FC<GradientBackgroundType> = ({
  colors = [PRIMARY_COLOR, PRIMARY_LIGHT_COLOR],
  start = {x: 1, y: 0.2},
  end = {x: 1, y: 0.7},
  children,
}) => {
  return (
    <LinearGradient
      colors={[...colors]}
      start={start}
      end={end}
      style={[styles.container]}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
 