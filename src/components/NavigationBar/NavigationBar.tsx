import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Image} from 'react-native-animatable';
import {NavigationBarItem} from './NavigationItem';
import {SceneRendererProps} from 'react-native-tab-view';

const challenge_logo = require('../../assets/img/flag.gif');
const store_logo = require('../../assets/img/store.png');
const inventory_logo = require('../../assets/img/chest.png');
const community_logo = require('../../assets/img/people.gif');

const NavigationBar: React.FC<SceneRendererProps> = props => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <View style={styles.container}>
      <NavigationBarItem logo={store_logo} label="Tienda" />
      <NavigationBarItem logo={inventory_logo} label="Inventario" />
      <NavigationBarItem logo={challenge_logo} active label="Reto" />
      <NavigationBarItem logo={community_logo} label="Comunidad" />
    </View>
  );
};

export {NavigationBar};
