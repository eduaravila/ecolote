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
  GOOGLE_SIGN_UP_COLOR,
} from '../../../../style/COLOR';
import {TutorialCard} from '../../../../components/TutorialCard/TutorialCard';
const game_logo = require('../../../../assets/img/paper.png');
import Find_logo from '../../../../assets/svg/flamenco-searching.svg';
import Change_logo from '../../../../assets/svg/arabica-3.svg';
import Compare_logo from '../../../../assets/svg/mirage-success.svg';
import Share_logo from '../../../../assets/svg/ginger-cat-715.svg';
import {ButtonCustom} from '../../../../components/Button/Button';
import goAccess from '../../../../navigation/navigators/Access';

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
          {
            title: 'Buscas formas de ayudar nuestro planeta?',
            logo: <Find_logo width={normalize(320)} height={320} />,
            description:
              'Ecolote te ayudara asignandote retos, que se ajusten a tu estilo de vida',
          },
          {
            title: 'Cambia tu estilo de vida ',
            logo: <Change_logo width={normalize(320)} height={320} />,
            description:
              'Consumiedo productos, amigables con el medio ambiente, con acciones simples que generan gran impacto',
          },
          {
            title: 'Visualiza tus resultados y estadisticas',
            logo: <Compare_logo width={normalize(320)} height={320} />,
            description:
              'Mantente a el tanto de tus resultados y llega a el top de los rankins',
          },
          {
            title: 'Comparte tus experiencias',
            logo: <Share_logo width={normalize(400)} height={400} />,
            description:
              'Toma fotos y agrega comentarios sobre tus experiencias con los retos asignados',
            buttom: (
              <ButtonCustom
                onPress={() => {
                  goAccess();
                }}
                textColor={PRIMARY_DARK_COLOR}
                fillColor={GOOGLE_SIGN_UP_COLOR}
                borderColor={'transparent'}>
                Suena interesante!
              </ButtonCustom>
            ),
          },
        ]}
        hasParallaxImages
        renderItem={TutorialCard}
        onSnapToItem={i => setactiveIndex(i)}
        sliderWidth={normalize(350)}
        layout={'default'}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={1}
        slideStyle={{flex: 1}}
        containerCustomStyle={{flex: 1}}
        scrollInterpolator={_scrollInterpolator}
        itemWidth={normalize(300)}
      />
      <Pagination
        dotsLength={4}
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
