import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {H3TitleTypes} from './types';
import {styles} from './styles';

const H3title: React.FC<H3TitleTypes> = ({content, style}) => {
  return <Text style={[styles.container, style]}>{content}</Text>;
};

export {H3title};
