import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {HEY_COLOR, HEY_COLOR_DARK} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FooterType {
  ready: boolean;
  onPressNext: () => void;
  onPress: () => void;
  loading: boolean;
}

const Footer: React.FC<FooterType> = ({
  ready,
  onPressNext,
  onPress,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        disabled={!ready || loading}
        topColor={HEY_COLOR}
        middleColor={HEY_COLOR_DARK}
        style={styles.go}
        onPress={ready ? () => onPress() : () => {}}>
        Comenzar
      </ColorButton>
    </View>
  );
};

export default Footer;
