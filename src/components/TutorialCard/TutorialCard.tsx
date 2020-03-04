import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {H6Title} from '../H6Title/H6Title';
import {styles} from './styles';
import {TutorialCardType} from './types';
import {normalize} from '../../style/UTILS';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {H3Title} from '../H3Title/H3Title';
import {H5Title} from '../H5Title/H5Title';

const TutorialCard: React.FC<TutorialCardType> = ({item}) => {
  return (
    <View style={styles.constainer}>
      {item.logo}
      <View style={styles.descriptionBox}>
        <H5Title style={styles.title}>{item.title}</H5Title>
        <Subtitle1>{item.description}</Subtitle1>
      </View>
      {item.buttom && item.buttom}
    </View>
  );
};

export {TutorialCard};
