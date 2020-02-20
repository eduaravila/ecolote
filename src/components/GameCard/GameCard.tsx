import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {H6Title} from '../H6Title/H6Title';
import {styles} from './styles';
import {GameCardType} from './types';

const GameCard: React.FC<GameCardType> = ({item}) => {
  return (
    <View style={styles.constainer}>
      <H6Title style={styles.descriptionText}>
        Please put your <H6Title style={styles.textBold}>username</H6Title> or
        your email and we can send you instructions to recover your{' '}
        <H6Title style={styles.textBold}>password.</H6Title>
      </H6Title>
      <Image source={item.logo} style={styles.logo} />
    </View>
  );
};

export {GameCard};
