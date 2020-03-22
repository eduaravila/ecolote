import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

const logo = require('../../assets/img/logox8.png');

const LoadingLogo: React.FC = ({children}) => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={logo}
        style={styles.image}
        animation="pulse"
        iterationCount={'infinite'}
        direction="alternate"
      />
      {children}
    </View>
  );
};
export {LoadingLogo};
