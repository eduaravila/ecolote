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
const game_logo = require('../../../../assets/img/paper.png');

const Body: React.FC<bodyTypes> = ({componentId}) => {
  let ref = useRef(null);
  const _scrollInterpolator = (index: any, carouselProps: any) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  };
  const _animatedStyles = (
    index: any,
    animatedValue: any,
    carouselProps: any,
  ) => {
    const sizeRef = carouselProps.vertical
      ? carouselProps.itemHeight
      : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
            extrapolate: 'clamp',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -sizeRef * 0.5,
              0,
              -sizeRef, // centered
              -sizeRef * 2, // centered
              -sizeRef * 3, // centered
            ],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={[
          {title: 'Example1', logo: game_logo},
          {title: 'Example2', logo: game_logo},
        ]}
        hasParallaxImages
        renderItem={GameCard}
        onSnapToItem={i => setactiveIndex(i)}
        sliderWidth={normalize(350)}
        layout={'stack'}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        slideStyle={{flex: 1}}
        containerCustomStyle={{flex: 1}}
        scrollInterpolator={_scrollInterpolator}
        itemWidth={normalize(250)}
       
      />
      <Pagination
        dotsLength={2}
        containerStyle={{
          backgroundColor: PRIMARY_LIGHT_COLOR,
          borderRadius: normalize(50),
          height: normalize(20),
          minHeight: normalize(20),
          width: normalize(250),
          paddingVertical: 0,
          marginVertical: normalize(10),
          justifyContent: 'space-around',
        }}
        dotStyle={{
          width: normalize(15),
          borderRadius: normalize(10),
          height: normalize(15),
          backgroundColor: PRIMARY_DARK_COLOR,
        }}
        activeDotIndex={activeIndex}
      />
    </View>
  );
};

export default Body;
