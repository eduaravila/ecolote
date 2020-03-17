import React, {useRef, useState, useEffect, Fragment} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
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
  getRarityColor,
} from '../../../../style/COLOR';
import {LoadingSkeleton} from '../../../../components/LoadingSkeleton/LoadingSkeleton';
const game_logo = require('../../../../assets/img/paper.png');

const Body: React.FC<bodyTypes> = ({
  componentId,
  length,
  data,
  loading,
  rarity,
  setactiveIndex,
  activeIndex,
}) => {
  let ref = useRef(null);

  const _scrollInterpolator = (index: any, carouselProps: any) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSkeleton
          style={{width: normalize(260), height: normalize(350)}}
        />
      ) : (
        <Fragment>
          <Carousel
            ref={ref}
            data={data}
            hasParallaxImages
            renderItem={GameCard}
            onSnapToItem={i => setactiveIndex(i)}
            sliderWidth={normalize(390)}
            // layout={'stack'}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.5}
            slideStyle={{flex: 1}}
            containerCustomStyle={{flex: 1}}
            // scrollInterpolator={_scrollInterpolator}
            itemWidth={normalize(280)}
          />
          <Pagination
            dotsLength={length}
            containerStyle={{
              backgroundColor: getRarityColor(rarity).first,
              borderRadius: normalize(50),
              height: normalize(20),
              minHeight: normalize(20),
              width: normalize(260),
              paddingVertical: 0,
              marginVertical: normalize(10),
              justifyContent: 'space-around',
            }}
            dotStyle={{
              width: normalize(15),
              borderRadius: normalize(10),
              height: normalize(15),
              backgroundColor: getRarityColor(rarity).second,
            }}
            activeDotIndex={activeIndex}
          />
        </Fragment>
      )}
    </View>
  );
};

export default Body;
