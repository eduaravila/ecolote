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
        Ingresa el codigo que te enviamos a tu correo
      </H6Title>

      <Stepper size={3} active={2} />
    </View>
  );
};

export default Header;
