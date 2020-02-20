import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel, {
  Pagination,
  getInputRangeFromIndexes,
} from 'react-native-snap-carousel';

import {styles} from './styles';
import {bodyTypes} from './types';
import {normalize} from '../../../../style/UTILS';
import {GameCard} from '../../../../components/GameCard/GameCard';
import {
  PRIMARY_DARK_COLOR,
  GAME_POINT_INACTIVE,
  PRIMARY_LIGHT_COLOR,
} from '../../../../style/COLOR';
import {GameStepper} from '../../../../components/GameStepper/GameStepper';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
const game_logo = require('../../../../assets/img/paper.png');

const Body: React.FC<bodyTypes> = ({componentId}) => {
  let ref = useRef(null);
  const _scrollInterpolator = (index: any, carouselProps: any) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  };

  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Subtitle1 style={styles.descriptionText}>
        ** Esta descripcion se utilizara, para entrenar nuestra red neuronal y asi
        poder validar los retos en base a las respuesta de los usuarios
      </Subtitle1>
      <GameStepper size={3} active={2} />
    </View>
  );
};

export default Body;
