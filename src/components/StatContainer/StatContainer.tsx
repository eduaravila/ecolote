import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {StateContainerType} from './types';
import {Image} from 'react-native-animatable';
import {Subtitle2} from '../Subtitle2/Subtitle2';

const StatContainer: React.FC<StateContainerType> = ({
  icon,
  children,
  iconText,
  style,
  styleJr,
  contentStyle,
  borderStyle,
  logoStyle,
  logoContainerStyle
}) => {
  return (
    <View style={[styles.container, style]}>
      {!!icon && (
        <View style={[styles.logoContainer,logoContainerStyle]}>
          <Image source={icon} style={[styles.logo,logoStyle]} />
          <Subtitle2 style={styles.iconText}>{iconText}</Subtitle2>
        </View>
      )}
      <View style={[styles.containerJr, styleJr]}>
        <View style={[styles.header,borderStyle]} />
        <View style={[styles.content, contentStyle]}>{children}</View>
      </View>
    </View>
  );
};

export {StatContainer};
