import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {
  NEXT_COLOR_DARK,
  NEXT_COLOR,
  PRIMARY_DARK_COLOR,
  PRIMARY_COLOR,
} from '../../../../style/COLOR';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_GALLERY} from '../../../../navigation/screen_names';

interface FooterType {
  componentId: string;
}

const Footer: React.FC<FooterType> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <ColorButton
        onPress={() => pushStack(componentId, ECOLOTE_GAME_GALLERY)}
        style={styles.go}>
        Siguiente
      </ColorButton>
    </View>
  );
};

export default Footer;
