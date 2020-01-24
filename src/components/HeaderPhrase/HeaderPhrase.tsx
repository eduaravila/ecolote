import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {H6Title} from '../H6Title/H6Title';
import {HeaderPhraseTypes} from './types';

const HeaderPhrase: React.FC<HeaderPhraseTypes> = ({image, content}) => {
  return (
    <View style={styles.constainer}>
      <Image source={image} style={styles.logo} />
      <H6Title style={styles.textRight}>{content}</H6Title>
    </View>
  );
};

export default HeaderPhrase;
