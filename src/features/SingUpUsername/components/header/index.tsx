import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {StatusBarCustom} from '../../../../components/StatusBar/StatusBarCustom';
import HeaderPhrase from '../../../../components/HeaderPhrase/HeaderPhrase';

const logo_image = require('../../../../assets/img/logox8.png');

const Header: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <StatusBarCustom />
      <HeaderPhrase
        content={'Ayuda a nuestro planeta con\n Ecolote'}
        image={logo_image}
      />
    </View>
  );
};

export default Header;
