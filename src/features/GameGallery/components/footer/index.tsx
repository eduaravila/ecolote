import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_STADISTICS} from '../../../../navigation/screen_names';

interface FooterType {
  componentId: string;
}

const Footer: React.FC<FooterType> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        style={styles.go}
        onPress={() => pushStack(componentId, ECOLOTE_GAME_STADISTICS)}>
        Siguiente
      </ColorButton>
    </View>
  );
};

export default Footer;
