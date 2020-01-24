import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {H5TitleTypes} from './types';
import {styles} from './styles';

const H5Title: React.FC<H5TitleTypes> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {H5Title};
