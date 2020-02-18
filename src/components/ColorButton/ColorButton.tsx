import React, {useState, useEffect} from 'react';
import Top from './colorButtonTop.svg';
import Middle from './colorButtonMiddle.svg';
import Bottom from './colorButtonBottom.svg';
import TouchableScale from 'react-native-touchable-scale';
import {styles} from './styles';
import {H3Title} from '../H3Title/H3Title';
import {ColorButtomType} from './types';

const ColorButton: React.FC<ColorButtomType> = ({children}) => {
  return (
    <TouchableScale style={styles.container} tension={300} friction={10}>
      <Top style={styles.top} />
      <Middle style={styles.middle} />
      <Bottom style={styles.bottom} fill={'black'} />
      <H3Title style={styles.children}>{children}</H3Title>
    </TouchableScale>
  );
};

export {ColorButton};
