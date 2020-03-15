import React, {useState, useEffect, Component} from 'react';
import {View, ActivityIndicator, Animated} from 'react-native';

import {PRIMARY_LIGHT_COLOR, PRIMARY_DARK_COLOR} from '../../style/COLOR';
import {styles} from './styles';

interface LoadingSkeletonType {
  style?: {[t: string]: any};
}

const LoadingSkeleton: React.FC<LoadingSkeletonType> = ({style}) => {
  return (
    <ActivityIndicator
      size="large"
      color={PRIMARY_DARK_COLOR}
      style={[styles.container, style]}
    />
  );
};

export {LoadingSkeleton};
