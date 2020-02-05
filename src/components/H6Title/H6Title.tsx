import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {H6TitleTypes} from './types';
import {styles} from './styles';

const H6Title: React.FC<H6TitleTypes> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {H6Title};
