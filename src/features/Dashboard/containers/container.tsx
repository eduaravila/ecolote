import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import {TabView} from 'react-native-tab-view';

import {NavigationBar} from '../../../components/NavigationBar/NavigationBar';
import Challenge from '../../Challenge/containers/container';
import {Image} from 'react-native-animatable';
import {normalize} from '../../../style/UTILS';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import ComingSoon from '../../CommingSoon/containers/container';

const challenge_logo = require('../../../assets/img/flag.gif');
const store_logo = require('../../../assets/img/store.png');
const inventory_logo = require('../../../assets/img/chest.png');
const community_logo = require('../../../assets/img/people.gif');

const LogoImage = (source: any) => {
  return (style: object) => (
    <Image
      source={source}
      style={[
        {
          position: 'absolute',
          top: '0%',
          marginTop: normalize(10),
          alignSelf: 'center',
          width: normalize(36),
          height: normalize(36),
        },
        {...style},
      ]}
    />
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const Dashboard: React.FC = () => {
  const [index, setIndex] = React.useState(2);

  const [routes] = React.useState([
    {
      key: 'inventory',
      title: 'Inventory',
      icon: LogoImage(inventory_logo),
    },
    {
      key: 'store',
      title: 'Store',
      icon: LogoImage(store_logo),
    },
    {
      key: 'challenge',
      title: 'Challenge',
      icon: LogoImage(challenge_logo),
    },
    {
      key: 'community',
      title: 'Community',
      icon: LogoImage(community_logo),
    },
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'challenge':
        return <Challenge />;
      case 'store':
        return <ComingSoon />;
      case 'community':
        return <ComingSoon />;
      case 'inventory':
        return <ComingSoon />;
    }
  };

  return (
    <GradientBackgroundNormal>
      <TabView
      
        lazy={false}
        swipeVelocityImpact={0}
        renderTabBar={NavigationBar}
        tabBarPosition={'bottom'}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderPager={props => (
          <ViewPagerAdapter {...props} transition="curl" showPageIndicator />
        )}
        initialLayout={initialLayout}
      />
    </GradientBackgroundNormal>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
