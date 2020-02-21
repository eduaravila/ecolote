import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Navigation} from 'react-native-navigation';
import goDashboard from '../../../../navigation/navigators/Dashboard';
import {useStoreActions} from '../../../../state/store';

const game_logo = require('../../../../assets/img/paper.png');

const Header: React.FC = () => {
  const setVisibilityBottom = useStoreActions(
    state => state.BottomNavigation.BottomNavigationSetVisity,
  );

  return (
    <View style={styles.constainer}>
      <Navigation.Element elementId="headergame">
        <H5Title>Puntuacion</H5Title>
      </Navigation.Element>
    </View>
  );
};

export default Header;
