import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {HEY_COLOR, HEY_COLOR_DARK} from '../../../../style/COLOR';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_GALLERY} from '../../../../navigation/screen_names';

interface FooterType {
  componentId: string;
  onPress: () => void;
}

const Footer: React.FC<FooterType> = ({componentId, onPress}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        topColor={HEY_COLOR}
        middleColor={HEY_COLOR_DARK}
        onPress={onPress}
        style={styles.go}>
        Siguiente
      </ColorButton>
    </View>
  );
};

export default Footer;
