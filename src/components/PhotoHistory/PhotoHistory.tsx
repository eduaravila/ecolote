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
import {MEDIA_API} from 'react-native-dotenv';

import {styles} from './styles';

const PhotoHistory: any = (
  item: any,
  props: any,
  mediaToken: string,
  onPress: () => void,
) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ParallaxImage
          source={{uri: MEDIA_API + 'public/' + item.item + '/' + mediaToken}}
          parallaxFactor={0.4}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'cover',
          }}
          {...props}
        />
      </View>
    </TouchableOpacity>
  );
};

export {PhotoHistory};
