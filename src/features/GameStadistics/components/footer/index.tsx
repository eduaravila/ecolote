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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  pushStack,
  pushStackWithProps,
} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_DESCRIPTION} from '../../../../navigation/screen_names';
import goDashboard from '../../../../navigation/navigators/Dashboard';

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
        onPress={() => goDashboard()}>
        Genial!
      </ColorButton>
    </View>
  );
};

export default Footer;
