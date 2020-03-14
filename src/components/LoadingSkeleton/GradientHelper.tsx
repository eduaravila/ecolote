import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {GradientHelperType} from './types';

const GradientHelper: React.FC<GradientHelperType> = ({
  color1,
  color2,
  start,
  end,
  style,
}) => {
  return (
    <LinearGradient
      colors={[color1, color2]}
      start={start}
      end={end}
      style={style}
    />
  );
};

export {GradientHelper};
