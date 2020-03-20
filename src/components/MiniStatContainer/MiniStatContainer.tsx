import React, {useState, useEffect, Children} from 'react';
import {View} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {Image} from 'react-native-animatable';

import {styles} from './styles';
import {MiniStateContainerType} from './types';

const MiniStateContainer: React.FC<MiniStateContainerType> = ({
  icon,
  style,
  children,
  logoStyle,
  onPress,
}) => {
  return (
    <TouchableScale
      style={[styles.container, style]}
      onPress={() => onPress()}
      tension={300}
      friction={10}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={[styles.logo, logoStyle]} />
        {children}
      </View>
    </TouchableScale>
  );
};

export {MiniStateContainer};
