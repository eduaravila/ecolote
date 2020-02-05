import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Subtitle2Types} from './types';
import {styles} from './styles';

const Subtitle2: React.FC<Subtitle2Types> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {Subtitle2};
