import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import {TabView} from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';

import {NavigationBar} from '../../../components/NavigationBar/NavigationBar';
import Challenge from '../../Challenge/containers/container';
import {Image} from 'react-native-animatable';
import {normalize} from '../../../style/UTILS';
import GradientBackgroundNormal from '../../../components/GradientBackgroundNormal/GradientBackgroundNormal';
import ComingSoon from '../../CommingSoon/containers/container';
import {useStoreState} from '../../../state/store';

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

interface DashboardType {
  bottomRef?: any;
}
const Dashboard: React.FC<DashboardType> = ({bottomRef = useRef(null)}) => {
  const [index, setIndex] = React.useState(2);
  const {show} = useStoreState(store => store.BottomNavigation);

  const goDown = () => {
    if (bottomRef?.current) {
      bottomRef.current.bounceOutDown(500).then((e: any) => e);
    }
  };

  const goUp = () => {
    if (bottomRef?.current) {
      bottomRef.current.bounceInUp(500).then((e: any) => e);
    }
  };

  useEffect(() => {
    if (show) {
      goDown();
    } else {
      goUp();
    }
  }, [show]);

  const [routes] = React.useState([
    {
      key: 'inventory',
      title: 'Inventario',
      icon: LogoImage(inventory_logo),
    },
    {
      key: 'store',
      title: 'Tienda',
      icon: LogoImage(store_logo),
    },
    {
      key: 'challenge',
      title: 'Reto',
      icon: LogoImage(challenge_logo),
    },
    {
      key: 'community',
      title: 'Comunidad',
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
        swipeEnabled={true}
        lazy={false}
        swipeVelocityImpact={0}
        renderTabBar={(props: any) => (
          <Animatable.View ref={bottomRef}>
            <NavigationBar {...props} />
          </Animatable.View>
        )}
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
