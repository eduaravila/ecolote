import React, {useState, useEffect} from 'react';
import Top from './colorButtonTop.svg';
import TopCancel from './colorButtonTopCancel.svg';
import Middle from './colorButtonMiddle.svg';
import MiddleCancel from './colorButtonMiddleCancel.svg';
import Bottom from './colorButtonBottom.svg';
import TouchableScale from 'react-native-touchable-scale';
import {styles} from './styles';
import {H3Title} from '../H3Title/H3Title';
import {ColorButtomType} from './types';

const ColorButton: React.FC<ColorButtomType> = ({
  children,
  onPress,
  cancel,
  style,
}) => {
  return (
    <TouchableScale
      style={[styles.container, style]}
      tension={300}
      friction={10}
      onPress={onPress}>
      {cancel ? (
        <TopCancel style={styles.top} color={'red'} />
      ) : (
        <Top style={styles.top} color={'red'} />
      )}
      {cancel ? (
        <MiddleCancel style={styles.middle} />
      ) : (
        <Middle style={styles.middle} />
      )}
      <Bottom style={styles.bottom} fill={'black'} />
      <H3Title style={styles.children}>{children}</H3Title>
    </TouchableScale>
  );
};

export {ColorButton};
