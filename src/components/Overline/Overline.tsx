import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {OverlineTypes} from './types';
import {styles} from './styles';

const Overline: React.FC<OverlineTypes> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export {Overline};
