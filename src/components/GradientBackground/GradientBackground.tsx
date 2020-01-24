import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <LinearGradient
        colors={[...colors]}
        start={start}
        end={end}
        style={[styles.container]}>
        {children}
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default GradientBackground;
