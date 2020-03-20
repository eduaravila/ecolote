import React, {useState, useEffect} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import {styles} from './styles';

const Photo: any = (item: any, props: any) => {
  console.log(item);

  return (
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
  );
};

export {Photo};
