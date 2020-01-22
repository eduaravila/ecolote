import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const logo_image = require('../../../../assets/img/logox8.png');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <Image source={logo_image} style={styles.logo} />
    </View>
  );
};

export default Header;
