import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Stepper} from '../../../../components/Stepper/Stepper';
import {HeaderTypes} from './types';
import {H6Title} from '../../../../components/H6Title/H6Title';

const Header: React.FC<HeaderTypes> = ({componentId}) => {
  return (
    <View style={styles.constainer}>
      <H6Title style={styles.title}>
        Enter the code that you receive in you mail
      </H6Title>

      <Stepper size={3} active={2} />
    </View>
  );
};

export default Header;
