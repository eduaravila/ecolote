import React, {useRef} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Navigation} from 'react-native-navigation';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {normalize} from '../../../../style/UTILS';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';

const photo_logo = require('../../../../assets/img/Asset4-8.png');

interface HeaderType {
  componentId: string;
  title: string;
}

const CarouselItem: any = (_: any, props: any) => (
  <View
    style={{
      width: normalize(210),
      height: normalize(160),
      borderRadius: normalize(10),
      backgroundColor: 'red',
    }}>
    <ParallaxImage
      source={photo_logo}
      parallaxFactor={0.4}
      containerStyle={{
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      }}
      style={{
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
      }}
      {...props}
    />
  </View>
);

const Header: React.FC<HeaderType> = ({componentId, title}) => {
  let ref = useRef(null);
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => {
          popStack(componentId);
        }}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Volver
      </MiniButton>
      <Navigation.Element elementId="headergamedescription">
        <H5Title>{title}</H5Title>
      </Navigation.Element>
      <H6Title style={styles.descriptionLabel}>Algunas fotos.</H6Title>

      <Carousel
        ref={ref}
        data={[
          {title: 'Example1', logo: photo_logo},
          {title: 'Example2', logo: photo_logo},
          {title: 'Example2', logo: photo_logo},
        ]}
        renderItem={CarouselItem}
        sliderWidth={normalize(320)}
        sliderHeight={normalize(160)}
        hasParallaxImages
        containerCustomStyle={{flex: 1}}
        itemWidth={normalize(210)}
      />
      <Subtitle2>
        Esto es opcional, pero te ayudara a obtener mas monedas
      </Subtitle2>
    </View>
  );
};

export default Header;
