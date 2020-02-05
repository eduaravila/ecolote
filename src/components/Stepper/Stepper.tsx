import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {StepperTypes} from './types';

const Stepper: React.FC<StepperTypes> = ({size, active}) => {
  return (
    <View style={styles.container}>
      {Array.apply(null, Array(size)).map((_, i) => {
        return (
          <View key={i}>
            <View
              key={i}
              style={i + 1 == active ? styles.pointActive : styles.point}>
              <Text
                style={i + 1 == active ? styles.textActive : styles.text}
                key={i}>
                {i + 1}
              </Text>
            </View>
            {i < size - 1 && <View style={styles.middleLine} />}
          </View>
        );
      })}
    </View>
  );
};

export {Stepper};
