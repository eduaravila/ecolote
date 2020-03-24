import React, {useState, useRef, Fragment} from 'react';
import {View} from 'react-native';
import {MEDIA_API} from 'react-native-dotenv';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';

import {styles} from './styles';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {HistoryCardTypes} from './types';
import {GameBadge} from '../GameBadge/GameBadge';
import {normalize} from '../../style/UTILS';
import {PhotoHistory} from '../PhotoHistory/PhotoHistory';
import {H3Title} from '../H3Title/H3Title';
import {ColorButtonMini} from '../ColorButtomMini/ColorButtonMini';
import {HEY_COLOR_DARK, HEY_COLOR} from '../../style/COLOR';
import {MiniButton} from '../MiniButton/MiniButton';
import {Subtitle2} from '../Subtitle2/Subtitle2';

const HistoryCard: React.FC<HistoryCardTypes> = ({
  Challenge,
  mediaToken,
  media,
  Points,
  total_time,
  end_date,
  _onPressMedia,
  _onPressDetails,
  ref = useRef(null),
}) => {
  return (
    <View style={[styles.container]}>
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
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Carousel
          ref={ref}
          data={media}
          shouldOptimizeUpdates
          layout={'default'}
          initialNumToRender={3}
          
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
      <View style={styles.footer}>
        <Subtitle2 style={styles.footerDate}>
          {moment(end_date, 'YYYY-MM-DD/HH:mm:ZZ').format('DD/MM/YYYY')}
        </Subtitle2>
        <MiniButton
          onPress={() => _onPressDetails()}
          style={styles.datailsButtom}>
          Ver
        </MiniButton>
      </View>
    </View>
  );
};
export {HistoryCard};
