import React, {useState, useEffect} from 'react';
import Top from './colorButtonTop.svg';
import TopCancel from './colorButtonTopCancel.svg';
import Middle from './colorButtonMiddle.svg';
import MiddleCancel from './colorButtonMiddleCancel.svg';
import Bottom from './colorButtonBottom.svg';
import TouchableScale from 'react-native-touchable-scale';
import {styles} from './styles';
import {H3Title} from '../H3Title/H3Title';
import {ColorButtomType} from './types';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import {PRIMARY_COLOR, PRIMARY_DARK_COLOR} from '../../style/COLOR';

const ColorButton: React.FC<ColorButtomType> = ({
  children,
  onPress,
  cancel = false,
  style,
  topColor = PRIMARY_COLOR,
  bottomColor = '#000',
  middleColor = PRIMARY_DARK_COLOR,
}) => {
  return (
    <TouchableScale
      style={[styles.container, style]}
      tension={300}
      friction={10}
      onPress={onPress}>
      <Svg
        width="100%"
        height="86"
        viewBox="0 0 194 86"
        style={styles.top}
        preserveAspectRatio="none">
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M10,0H184c.074.108,9.962,9.857,10,10V76L184,86H10L0,76V10Z"
          fill={topColor}
        />
      </Svg>

      <Svg
        width="100%"
        height="86"
        viewBox="0 0 194 86"
        style={styles.middle}
        preserveAspectRatio="none">
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M10,0H184c.074.108,9.962,9.857,10,10V76L184,86H10L0,76V10Z"
          fill={middleColor}
        />
      </Svg>
      <Svg
        width="100%"
        height="86"
        viewBox="0 0 194 86"
        style={styles.bottom}
        preserveAspectRatio="none">
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M10,0H184c.074.108,9.962,9.857,10,10V76L184,86H10L0,76V10Z"
          fill={bottomColor}
        />
      </Svg>
      <H3Title style={styles.children}>{children}</H3Title>
    </TouchableScale>
  );
};

export {ColorButton};
