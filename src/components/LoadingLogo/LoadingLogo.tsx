import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
const logo = require('../../assets/img/logox8.png');

const LoadingLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={logo}
        style={styles.image}
        animation="slideInDown"
        iterationCount={'infinite'}
        direction="alternate"
      />
    </View>
  );
};
export {LoadingLogo};
