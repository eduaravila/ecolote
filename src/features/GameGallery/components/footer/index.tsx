import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ColorButton style={styles.go}>Siguiente</ColorButton>
    </View>
  );
};

export default Footer;
