import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import Body from '../components/body/index';
import {NavigationBar} from '../../../components/NavigationBar/NavigationBar';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import Head from '../components/header';
import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import {getColumn} from '../../../style/UTILS';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);
const initialLayout = {width: Dimensions.get('window').width};
const Challenge: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <GradientBackground
      colors={['transparent', 'transparent']}
      style={{paddingLeft: getColumn(0.1), paddingRight: getColumn(0.1)}}>
      <Head />
      <Body />
    </GradientBackground>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
