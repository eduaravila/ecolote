import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {Image} from 'react-native-animatable';

import {styles} from './styles';
import {MiniStateContainerType} from './types';

const MiniStateContainer: React.FC<MiniStateContainerType> = ({
  icon,
  style,
  logoStyle,
}) => {
  return (
    <TouchableScale style={[styles.container, style]} tension={300} friction={10}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={[styles.logo, logoStyle]} />
      </View>
    </TouchableScale>
  );
};

export {MiniStateContainer};
