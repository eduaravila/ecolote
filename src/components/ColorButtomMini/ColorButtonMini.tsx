import React, {useState, useEffect} from 'react';
import TouchableScale from 'react-native-touchable-scale';
import {styles} from './styles';
import {H3Title} from '../H3Title/H3Title';
import {ColorButtomType} from './types';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const ColorButtonMini: React.FC<ColorButtomType> = ({
  children,
  onPress,
  cancel = false,
  style,
  topColor = '#0097fe',
  bottomColor = '#000',
  middleColor = '#005894',
}) => {
  return (
    <TouchableScale 
      style={[styles.container, style]}
      tension={300}
      friction={10}
      onPress={onPress}>
      <Svg width="90" height="86" viewBox="0 0 90 86" style={styles.top} preserveAspectRatio="none">
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M4.639,0H85.361C85.4.108,89.982,9.857,90,10V76L85.361,86H4.639L0,76V10Z"
          fill={topColor}
        />
      </Svg>

      <Svg width="90" height="86" viewBox="0 0 90 86" style={styles.middle}>
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M4.639,0H85.361C85.4.108,89.982,9.857,90,10V76L85.361,86H4.639L0,76V10Z"
          fill={middleColor}
        />
      </Svg>
      <Svg width="90" height="86" viewBox="0 0 90 86" style={styles.bottom}>
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M4.639,0H85.361C85.4.108,89.982,9.857,90,10V76L85.361,86H4.639L0,76V10Z"
          fill={bottomColor}
        />
      </Svg>
      <H3Title style={styles.children}>{children}</H3Title>
    </TouchableScale>
  );
};

export {ColorButtonMini};
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="90"
  height="86"
  viewBox="0 0 90 86">
  <path
    id="Path_318"
    data-name="Path 318"
    d="M4.639,0H85.361C85.4.108,89.982,9.857,90,10V76L85.361,86H4.639L0,76V10Z"
    fill="#69b14e"
  />
</svg>;
