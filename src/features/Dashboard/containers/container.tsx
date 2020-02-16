import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {NavigationBar} from '../../../components/NavigationBar/NavigationBar';
import Challenge from '../../Challenge/containers/container';

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);
const initialLayout = {width: Dimensions.get('window').width};

const Dashboard: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'challenge', title: 'Challenge'},
    {key: 'store', title: 'store'},
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'challenge':
        return <Challenge />;
      case 'store':
        return <SecondRoute />;
    }
  };

  return (
    <TabView
      renderTabBar={NavigationBar}
      tabBarPosition={'bottom'}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
