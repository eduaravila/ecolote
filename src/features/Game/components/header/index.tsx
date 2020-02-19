import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';

const game_logo = require('../../../../assets/img/paper.png');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <MiniButton onPress={() => null} iconName={'arrow-left-drop-circle'} style={styles.back}>
        Back
      </MiniButton>
      <H5Title>Di adios a las toallitas humedas</H5Title>
      <Image source={game_logo} style={styles.logo} />
    </View>
  );
};

export default Header;
