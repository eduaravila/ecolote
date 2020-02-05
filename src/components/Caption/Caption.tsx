import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CaptionTypes} from './types';
import {styles} from './styles';

const Caption: React.FC<CaptionTypes> = ({children, style, onPress}) => {
  return (
    <Text style={[styles.container, style]} onPress={onPress}>
      {children}
    </Text>
  );
};

export {Caption};
