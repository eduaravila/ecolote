import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {BoxShadow} from 'react-native-shadow';
import {SceneRendererProps, TabBar} from 'react-native-tab-view';
import {
  LABEL_ACTIVE_BACKGROUND_COLOR,
  PRIMARY_DARK_COLOR,
} from '../../style/COLOR';
import {NavigationBarItem} from './NavigationItem';
import {normalize} from '../../style/UTILS';

const NavigationBar: React.FC<any> = props => {
  return (
    <TabBar
      
      pressColor={LABEL_ACTIVE_BACKGROUND_COLOR}
      pressOpacity={1}
      {...props}
      renderLabel={({route, focused}) => (
        <NavigationBarItem
          label={route.title ? route.title : ''}
          active={focused}
        />
      )}
      indicatorStyle={{
        backgroundColor: LABEL_ACTIVE_BACKGROUND_COLOR,
        height: normalize(55),
        elevation: 20,
        borderTopEndRadius: normalize(10),
        borderTopStartRadius: normalize(10),
      }}
      renderIcon={({route, focused}: any) =>
        route.icon({
          opacity: focused ? 1 : 0.5,
          marginTop: focused ? 0 : normalize(10),
        })
      }
      tabStyle={{
        padding: 0,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'stretch',
        alignItems: 'stretch',
      }}
      bounces
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: normalize(50),
      }}
      style={styles.container}
    />
  );
};

export {NavigationBar};
