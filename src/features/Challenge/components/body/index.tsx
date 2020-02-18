import React from 'react';
import {View, Text} from 'react-native';

import Exm from '../../../../assets/img/aqua_palace.svg';
import {styles} from './styles';
import {H3Title} from '../../../../components/H3Title/H3Title';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';

const arena_logo = require('../../../../assets/img/aqua_palace.png');
const Body: React.FC = () => {
  return (
    <View style={styles.container}>
      <Exm />
      <ColorButton>{'Play'}</ColorButton>
    </View>
  );
};

export default Body;
