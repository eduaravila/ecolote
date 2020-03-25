import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {MiniButtonIconType, MiniButtonType} from './types';
import {normalize} from '../../style/UTILS';
import {Subtitle2} from '../Subtitle2/Subtitle2';
import {styles} from './styles';

const ButtonIcon: React.FC<MiniButtonIconType> = ({
  name = 'undefined',
  size = normalize(14),
  color = 'white',
  style,
}) => <Icon name={name} size={size} color={color} style={style} />;

const MiniButton: React.FC<MiniButtonType> = ({
  block,
  borderColor,
  children,
  fillColor,
  iconColor,
  iconName,
  iconSize,
  iconStyle,
  onPress,
  style,
  textColor = 'white',
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {iconName ? (
          <Subtitle2 style={[{color: textColor}, textStyle]}>
            {
              <ButtonIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={iconStyle}
              />
            }
            {'  '}
            {children}
          </Subtitle2>
        ) : (
          <Subtitle2 style={[{color: textColor}, textStyle]}>
            {children}
          </Subtitle2>
        )}
      </View>
    </TouchableOpacity>
  );
};

export {MiniButton};
