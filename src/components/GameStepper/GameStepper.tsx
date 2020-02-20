import React, {useState, useEffect, Fragment} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {GameStepperTypes} from './types';

const GameStepper: React.FC<GameStepperTypes> = ({size, active}) => {
  return (
    <View style={styles.container}>
      {Array.apply(null, Array(size)).map((_, i) => {
        return (
          <Fragment key={i}>
            <View style={i + 1 == active ? styles.pointActive : styles.point} />
          </Fragment>
        );
      })}
    </View>
  );
};

export {GameStepper};
