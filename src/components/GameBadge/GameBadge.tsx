import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {GameBadgeType} from './types';
import {styles} from './styles';
import {normalize} from '../../style/UTILS';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {Caption} from '../Caption/Caption';

const GameBadge: React.FC<GameBadgeType> = ({
  color = '#b4003a',
  title = '',
  name = '',
  logo,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Subtitle1 style={styles.textBold}>{title}</Subtitle1>
      <Svg width={'100%'} height={'100%'} viewBox="0 0 64 61">
        <Path
          id="Path_318"
          data-name="Path 318"
          d="M3.3,0H60.7c.024.077,3.286,6.991,3.3,7.093V53.907L60.7,61H3.3L0,53.907V7.093Z"
          fill={color}
        />
      </Svg>
      <Image
        source={{
          uri: logo,
        }}
        style={styles.logo}
      />
      <Caption>{name}</Caption>
    </View>
  );
};

export {GameBadge};
