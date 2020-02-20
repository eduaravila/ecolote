import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {REPLACE_COLOR, REPLACE_COLOR_DARK} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  pushStack,
  pushStackWithProps,
} from '../../../../navigation/navigators/stackUtils';
import {
  ECOLOTE_GAME_DESCRIPTION,
  ECOLOTE_GAME_COMENTARY,
} from '../../../../navigation/screen_names';
import {Overline} from '../../../../components/Overline/Overline';

interface FooterType {
  componentId: string;
}

const Footer: React.FC<FooterType> = ({componentId}) => {
  return (
    <View style={styles.container}>
      
      <ColorButton
        style={styles.go}
        onPress={() =>
          pushStackWithProps(componentId, ECOLOTE_GAME_COMENTARY, {})
        }>
        Siguiente
      </ColorButton>
    </View>
  );
};

export default Footer;
