import React from 'react';
import {View, Image} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import {styles} from './styles';
import {ColorButton} from '../../../../components/ColorButton/ColorButton';
const arena_logo = require('../../../../assets/img/aqua_palace.gif');

interface BodyType {
  toggle_visibility: (e: boolean) => void;
  loading: boolean;
}

const Body: React.FC<BodyType> = ({toggle_visibility, loading}) => {
  return (
    <View style={styles.container}>
      <TouchableScale style={styles.arenaContainer} tension={100} friction={1}>
        <Image source={arena_logo} style={styles.arena} />
      </TouchableScale>
      <ColorButton onPress={() => toggle_visibility(true)} cancel={loading}>
        {loading ? 'Cancel ' : 'Play'}
      </ColorButton>
    </View>
  );
};

export default Body;
