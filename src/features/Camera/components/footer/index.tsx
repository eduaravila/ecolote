import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_STADISTICS} from '../../../../navigation/screen_names';
import {HEY_COLOR, HEY_COLOR_DARK} from '../../../../style/COLOR';

interface FooterType {
  componentId: string;
}

const Footer: React.FC<FooterType> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        topColor={HEY_COLOR}
        middleColor={HEY_COLOR_DARK}
        style={styles.go}
        onPress={() => pushStack(componentId, ECOLOTE_GAME_STADISTICS)}>
        Capturar
      </ColorButton>
    </View>
  );
};

export default Footer;
