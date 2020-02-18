import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';

const arena_logo = require('../../../../assets/img/aqua_palace.gif');
const Body: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arenaContainer}>
        <Image source={arena_logo} style={styles.arena} />
      </View>
      <ColorButton>{'Play'}</ColorButton>
    </View>
  );
};

export default Body;
