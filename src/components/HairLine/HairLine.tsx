import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {HairLineTypes} from './types';

const HairLine: React.FC<HairLineTypes> = ({style}) => {
  return <View style={[styles.hairLine, style]} />;
};

export {HairLine};
