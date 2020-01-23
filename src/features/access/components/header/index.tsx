import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {H3title} from '../../../../components/H3Title/H3Title';
import {StatusBarCustom} from '../../../../components/StatusBar/StatusBarCustom';

const logo_image = require('../../../../assets/img/logox8.png');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <StatusBarCustom />
      <Image source={logo_image} style={styles.logo} />
      <H3title content={'Ecolote'} />
    </View>
  );
};

export default Header;
