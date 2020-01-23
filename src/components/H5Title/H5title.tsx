import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {H5TitleTypes} from './types';
import {styles} from './styles';

const H5Title: React.FC<H5TitleTypes> = ({content, style}) => {
  return <Text style={[styles.container, style]}>{content}</Text>;
};

export {H5Title};
