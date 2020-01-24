import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Subtitle1Types} from './types';
import {styles} from './styles';

const Subtitle1: React.FC<Subtitle1Types> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {Subtitle1};
