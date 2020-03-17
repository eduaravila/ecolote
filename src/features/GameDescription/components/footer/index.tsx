import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {HEY_COLOR, HEY_COLOR_DARK} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {popStack} from '../../../../navigation/navigators/stackUtils';

interface FooterType {
  ready: boolean;
  onPressNext: () => void;
  onPress: () => void;
  loading: boolean;
  justRead?: boolean;
  componentId: string;
}

const Footer: React.FC<FooterType> = ({
  ready,
  onPressNext,
  onPress,
  loading,
  componentId,
  justRead = false,
}) => {
  return (
    <View style={styles.container}>
      {justRead ? (
        <ColorButton
          topColor={HEY_COLOR}
          middleColor={HEY_COLOR_DARK}
          style={styles.go}
          onPress={() => popStack(componentId)}>
          Volver
        </ColorButton>
      ) : (
        <ColorButton
          disabled={!ready || loading}
          topColor={HEY_COLOR}
          middleColor={HEY_COLOR_DARK}
          style={styles.go}
          onPress={ready ? () => onPress() : () => {}}>
          Comenzar
        </ColorButton>
      )}
    </View>
  );
};

export default Footer;
