import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {
  REPLACE_COLOR,
  REPLACE_COLOR_DARK,
  HEY_COLOR,
  HEY_COLOR_DARK,
} from '../../../../style/COLOR';

interface FooterType {
  componentId: string;
  onPress: () => void;
}

const Footer: React.FC<FooterType> = ({componentId, onPress}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        style={styles.go}
        topColor={HEY_COLOR}
        middleColor={HEY_COLOR_DARK}
        onPress={onPress}>
        Siguiente
      </ColorButton>
    </View>
  );
};

export default Footer;
