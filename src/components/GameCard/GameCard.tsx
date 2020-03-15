import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Markdown, {PluginContainer} from 'react-native-markdown-renderer';

import {H6Title} from '../H6Title/H6Title';
import {styles} from './styles';
import {GameCardType} from './types';
import {useStoreState} from '../../state/store';
import {normalize} from '../../style/UTILS';
import {ScrollView} from 'react-native-gesture-handler';

const stylesMD = StyleSheet.create({
  heading: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontSize: normalize(16),
  },
  blockquote: {
    fontFamily: 'Rubik-Bold',
  },
  img: {
    borderRadius: normalize(5),
  },
});

const GameCard: React.FC<GameCardType> = ({item}) => {
  return (
    <View style={styles.constainer}>
      <ScrollView alwaysBounceVertical>
        <Markdown style={stylesMD}>{item.txt}</Markdown>
      </ScrollView>
    </View>
  );
};

export {GameCard};
