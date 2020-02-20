import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {REPLACE_COLOR, REPLACE_COLOR_DARK} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ColorButton style={styles.go}>Comenzar</ColorButton>
    </View>
  );
};

export default Footer;
