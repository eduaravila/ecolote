import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {MEDIA_API} from 'react-native-dotenv';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Navigation} from 'react-native-navigation';
import goDashboard from '../../../../navigation/navigators/Dashboard';
import {useStoreActions, useStoreState} from '../../../../state/store';

const game_logo = require('../../../../assets/img/paper.png');

interface HeaderType {
  title: string;
  portrait: string;
}

const Header: React.FC<HeaderType> = ({portrait, title}) => {
  const setVisibilityBottom = useStoreActions(
    state => state.BottomNavigation.BottomNavigationSetVisity,
  );
  let {mediaToken} = useStoreState(state => state.credentials);

  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => {
          setVisibilityBottom({show: false});
          goDashboard();
        }}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Volver
      </MiniButton>
      <Navigation.Element elementId="headergame">
        <H5Title>{title}</H5Title>
      </Navigation.Element>
      <Image
        source={{
          uri: MEDIA_API + 'image/' + portrait + '/' + mediaToken,
        }}
        style={styles.logo}
      />
    </View>
  );
};

export default Header;
