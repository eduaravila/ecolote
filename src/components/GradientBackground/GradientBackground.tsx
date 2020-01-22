import React, {useState, useEffect, Fragment} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientBackgroundType} from './types';
import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';

const GradientBackground: React.FC<GradientBackgroundType> = ({
  colors = [PRIMARY_COLOR, PRIMARY_LIGHT_COLOR],
  start,
  end,
  children,
}) => {
  return (
    <LinearGradient colors={[...colors]} start={start} end={end}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
