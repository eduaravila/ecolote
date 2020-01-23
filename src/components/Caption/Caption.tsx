import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {CaptionTypes} from './types';
import {styles} from './styles';

const Caption: React.FC<CaptionTypes> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {Caption};
