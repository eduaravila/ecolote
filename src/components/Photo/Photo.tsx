import React, {useState, useEffect} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {useStoreActions} from '../../state/store';

const Photo: any = (
  item: any,
  props: any,
  onPressDelete: (name: string) => void,
  _onLongPress: (name: string, show: boolean) => void,
) => {
  return (
    <TouchableOpacity
      onLongPress={() => {
        _onLongPress(item.index, true);
      }}>
      <View style={styles.container}>
        <ParallaxImage
          source={{uri: item.item.uri}}
          parallaxFactor={0.4}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'contain',
          }}
          {...props}
        />
      </View>
      {item.item.showMenu && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.backdropDelete}
            onPress={() => {
              _onLongPress(item.index, false);
            }}
          />
          <Icon
            name={'delete'}
            style={styles.deleteIcon}
            onPress={() => {
              onPressDelete(item.index);
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export {Photo};
