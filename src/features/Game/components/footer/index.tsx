import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {ColorButton} from '../../../../components/ColorButton/ColorButton';
import {
  REPLACE_COLOR,
  REPLACE_COLOR_DARK,
  CANCEL_COLOR,
  CANCEL_COLOR_DARK,
} from '../../../../style/COLOR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  pushStack,
  pushStackWithProps,
} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_GAME_DESCRIPTION} from '../../../../navigation/screen_names';
import {normalize} from '../../../../style/UTILS';

interface FooterType {
  componentId: string;
  _toggle_searching: () => void;
  _cancel_search: () => void;
  loading: boolean;
  onPress: () => void;
}

const Footer: React.FC<FooterType> = ({
  componentId,
  _toggle_searching,
  _cancel_search,
  onPress,
  loading = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          position: loading ? 'absolute' : 'relative',
          bottom: loading ? normalize(20) : 0,
        },
      ]}>
      <ColorButton style={styles.go} disabled={loading} onPress={onPress}>
        Vamos!
      </ColorButton>
      <ColorButton
        loading={loading}
        onPress={loading ? () => _cancel_search() : () => _toggle_searching()}
        topColor={loading ? CANCEL_COLOR : REPLACE_COLOR}
        middleColor={loading ? CANCEL_COLOR_DARK : REPLACE_COLOR_DARK}
        style={styles.another}>
        <Icon
          name={loading ? 'close-circle' : 'refresh'}
          style={styles.anotherText}
        />
      </ColorButton>
    </View>
  );
};

export default Footer;
