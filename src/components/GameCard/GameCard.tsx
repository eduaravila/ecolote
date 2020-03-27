import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Markdown, {getUniqueID} from 'react-native-markdown-renderer';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import {H6Title} from '../H6Title/H6Title';
import {styles} from './styles';
import {GameCardType} from './types';
import {useStoreState} from '../../state/store';
import {normalize} from '../../style/UTILS';
import {ScrollView} from 'react-native-gesture-handler';
import {PRIMARY_COLOR} from '../../style/COLOR';

const openLink = async (url: string = 'https://www.google.com') => {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: PRIMARY_COLOR,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'overFullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: PRIMARY_COLOR,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
    } else Linking.openURL(url);
  } catch (error) {
    console.log(error);
  }
};

const rules = {
  image: (node: any, children: any, parent: any, styles: any) => {
    return (
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          key={getUniqueID()}
          source={{uri: node.attributes.src}}
          style={[
            styles.image,
            {
              borderRadius: normalize(10),
              width: normalize(250),
              height: normalize(168),
              resizeMode: 'contain',
              alignSelf: 'center',
            },
          ]}
        />
      </View>
    );
  },

  link: (node: any, children: any, parent: any, styles: any) => {
    console.log(node);
    return (
      <Text
        onPress={() => {
          openLink(node.attributes.href);
        }}
        key={getUniqueID()}
        style={[
          styles[parent[parent.length - 1].type],
          {textDecorationLine: 'underline'},
        ]}>
        {children}
      </Text>
    );
  },
};

const stylesMD = StyleSheet.create({
  heading: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
    textAlign: 'center',
  },
  heading2: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontSize: normalize(24),
  },
  text: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontSize: normalize(16),
  },
  blockquote: {
    fontFamily: 'Rubik-Bold',
  },
  image: {
    borderRadius: normalize(10),
  },
});

const GameCard: React.FC<GameCardType> = props => {
  return (
    <View style={styles.constainer}>
      <ScrollView alwaysBounceVertical>
        <Markdown style={stylesMD} rules={rules}>
          {props.item.txt}
        </Markdown>
      </ScrollView>
    </View>
  );
};

export {GameCard};
