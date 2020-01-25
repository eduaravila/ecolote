import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {H6Title} from '../H6Title/H6Title';
import {HeaderPhraseTypes} from './types';

const HeaderPhrase: React.FC<HeaderPhraseTypes> = ({
  image,
  content,
  style,
  textStyle,
  imageStyle,
}) => {
  return (
    <View style={[styles.constainer, style]}>
      <Image source={image} style={[styles.logo, imageStyle]} />
      <H6Title style={[styles.textRight, textStyle]}>{content}</H6Title>
    </View>
  );
};

export default HeaderPhrase;
