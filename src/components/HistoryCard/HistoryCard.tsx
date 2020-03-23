import React, {useState, useRef, Fragment} from 'react';
import {View} from 'react-native';
import {MEDIA_API} from 'react-native-dotenv';
import Carousel from 'react-native-snap-carousel';

import {styles} from './styles';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {HistoryCardTypes} from './types';
import {GameBadge} from '../GameBadge/GameBadge';
import {normalize} from '../../style/UTILS';
import {PhotoHistory} from '../PhotoHistory/PhotoHistory';
import {H3Title} from '../H3Title/H3Title';

const HistoryCard: React.FC<HistoryCardTypes> = ({
  Challenge,
  mediaToken,
  media,
  Points,
  _onPressMedia,
  ref = useRef(null),
}) => {
  console.log(Challenge.badges.rarity);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Subtitle1 style={styles.title}>{Challenge.title}</Subtitle1>
        <View style={styles.badgesContainer}>
          <GameBadge
            style={{width: normalize(20), height: normalize(20)}}
            color={'white'}
            logo={
              MEDIA_API +
              'image/' +
              Challenge.badges.type.image +
              '/' +
              mediaToken
            }
          />
          <GameBadge
            style={{width: normalize(20), height: normalize(20)}}
            color={'white'}
            logo={
              MEDIA_API +
              'image/' +
              Challenge.badges.zone.image +
              '/' +
              mediaToken
            }
          />
          <GameBadge
            style={{width: normalize(20), height: normalize(20)}}
            color={'white'}
            logo={
              MEDIA_API +
              'image/' +
              Challenge.badges.rarity.image +
              '/' +
              mediaToken
            }
          />
        </View>
      </View>
      <View
        style={{
          height: normalize(50),
          width: '100%',
          flexDirection: 'row',
        }}>
        <Carousel
          ref={ref}
          data={media}
          layout={'default'}
          renderItem={(item, props) =>
            PhotoHistory(item, props, mediaToken, () =>
              _onPressMedia(item.index),
            )
          }
          sliderWidth={normalize(150)}
          sliderHeight={normalize(50)}
          hasParallaxImages
          style={{
            width: '80%',
            height: normalize(50),
          }}
          containerCustomStyle={{flex: 1}}
          itemWidth={normalize(75)}
        />
        <H3Title style={styles.grade}>{Points.grade}</H3Title>
      </View>
    </View>
  );
};
export {HistoryCard};
