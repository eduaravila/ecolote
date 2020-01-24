import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {H3TitleTypes} from './types';
import {styles} from './styles';

const H3Title: React.FC<H3TitleTypes> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {H3Title};
