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

const Header: React.FC<HeaderType> = ({componentId}) => {
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
    </View>
  );
};

export default Header;
