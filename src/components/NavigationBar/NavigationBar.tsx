import React, {useState, useRef} from 'react';
import {styles} from './styles';
import {SceneRendererProps, TabBar} from 'react-native-tab-view';
import {
  LABEL_ACTIVE_BACKGROUND_COLOR,
  PRIMARY_LIGHT_COLOR,
  STAT_LABEL_COLOR,
  PRIMARY_COLOR,
} from '../../style/COLOR';
import {NavigationBarItem} from './NavigationItem';
import {normalize} from '../../style/UTILS';

const NavigationBar: React.FC<any> = props => {
  return (
    <TabBar
      pressColor={STAT_LABEL_COLOR}
      pressOpacity={1}
      {...props}
      renderLabel={({route, focused}) => (
        <NavigationBarItem
          label={route.title ? route.title : ''}
          active={focused}
        />
      )}
      indicatorStyle={{
        backgroundColor: STAT_LABEL_COLOR,
        height: normalize(55),
        elevation: 20,
        paddingHorizontal: 20,
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
      
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: normalize(50),
        zIndex: 10,
        elevation: 1,
      }}
      style={[styles.container, {height: normalize(50)}]}
    />
  );
};

export {NavigationBar};
