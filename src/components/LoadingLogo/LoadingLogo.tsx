import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import {H6Title} from '../H6Title/H6Title';
import {H3Title} from '../H3Title/H3Title';
import {H5Title} from '../H5Title/H5Title';
const logo = require('../../assets/img/logox8.png');

const LoadingLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={logo}
        style={styles.image}
        animation="pulse"
        iterationCount={'infinite'}
        direction="alternate"
      />
      <H5Title>Cargando...</H5Title>
    </View>
  );
};
export {LoadingLogo};
