import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {MiniStateContainerType} from './types';
import {Image} from 'react-native-animatable';

const MiniStateContainer: React.FC<MiniStateContainerType> = ({
  icon,
  style,
  logoStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={[styles.logo, logoStyle]} />
      </View>
    </View>
  );
};

export {MiniStateContainer};
