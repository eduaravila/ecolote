import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {H3Title} from '../../../../components/H3Title/H3Title';

const logo_image = require('../../../../assets/img/eco_guadalupe_8.gif');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <Image source={logo_image} style={styles.logo} />
      <H3Title>Ecolote</H3Title>
    </View>
  );
};

export default Header;
