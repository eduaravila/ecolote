import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {Stepper} from '../../../../components/Stepper/Stepper';

const logo_image = require('../../../../assets/img/logox8.png');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <Image source={logo_image} style={styles.logo} />
      <H5Title>Ecolote</H5Title>
      <Stepper size={3} active={3} />
    </View>
  );
};

export default Header;
