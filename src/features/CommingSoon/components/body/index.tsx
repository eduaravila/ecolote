import React from 'react';
import {View, Image} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import {styles} from './styles';
import ComingSoon from '../../../../assets/svg/comingSoon.svg';
import {H3Title} from '../../../../components/H3Title/H3Title';

const Body: React.FC = () => {
  return (
    <View style={styles.container}>
      <H3Title style={styles.title}>Proximamente....</H3Title>
      <TouchableScale style={styles.arenaContainer} tension={100} friction={1}>
        <ComingSoon style={styles.arena} />
      </TouchableScale>
    </View>
  );
};

export default Body;
