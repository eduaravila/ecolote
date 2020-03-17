import React, {useState, useEffect, Fragment} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {GameStepperTypes} from './types';
import { PRIMARY_LIGHT_COLOR, PRIMARY_DARK_COLOR } from '../../style/COLOR';

const GameStepper: React.FC<GameStepperTypes> = ({
  size,
  active,
  background = PRIMARY_DARK_COLOR,
  activePointColor =PRIMARY_LIGHT_COLOR
}) => {
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      {Array.apply(null, Array(size)).map((_, i) => {
        return (
          <Fragment key={i}>
            <View
              style={[
                i + 1 == active ? styles.pointActive : styles.point,
                {
                  backgroundColor: activePointColor,
                  opacity: i + 1 == active ? 1 : 0.5,
                },
              ]}
            />
          </Fragment>
        );
      })}
    </View>
  );
};

export {GameStepper};
