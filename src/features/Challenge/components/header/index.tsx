import React, {useEffect, useRef, useState} from 'react';
import {View, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {StatContainer} from '../../../../components/StatContainer/StatContainer';
import {MiniStateContainer} from '../../../../components/MiniStatContainer/MiniStatContainer';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {styles} from './styles';
import {STAT_LABEL_COLOR} from '../../../../style/COLOR';
import {H3Title} from '../../../../components/H3Title/H3Title';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {normalize} from '../../../../style/UTILS';

const coin_image = require('../../../../assets/img/dinero_es_dinero.png');
const level_image = require('../../../../assets/img/level.png');
const trophy_image = require('../../../../assets/img/trophy.png');
const config_image = require('../../../../assets/img/cog.png');
const news_image = require('../../../../assets/img/newspaper.png');
const zoom_image = require('../../../../assets/img/zoom.gif');

const MY_WALLET_GQL = gql`
  query MyWallet {
    MyWallet {
      _id
      Coins {
        total
      }
      Level {
        total
      }
      Trophys {
        total
      }
      User {
        username
      }
    }
  }
`;

interface HeadType {
  show: boolean;
  ref?: any;
  refLoading?: any;
}

const Head: React.FC<HeadType> = ({
  show,
  ref = useRef(null),
  refLoading = useRef(null),
}) => {
  let [loadingSize] = useState(new Animated.Value(0));

  let {loading, error, data} = useQuery(MY_WALLET_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      // console.log(e);
    },
  });

  const goUpLoading = () => {
    if (refLoading?.current) {
      refLoading.current
        .animate({
          0: {
            width: '100%',
            height: '100%',
            opacity: 1,
            transform: [
              {
                scale: 1,
              },
            ],
          },
          1: {
            width: '0%',
            height: '0%',
            opacity: 0,
            transform: [
              {
                scale: 0,
              },
            ],
          },
        })
        .then((e: any) => e);
    }
  };
  const goDownLoading = () => {
    if (refLoading?.current) {
      refLoading.current
        .animate({
          0: {width: '0%', height: '0%', opacity: 0},
          1: {
            width: '100%',
            height: '100%',
            opacity: 1,
          },
        })
        .then((e: any) => e);
    }
  };

  const goUp = () => {
    if (ref?.current) {
      ref.current.bounceOutUp(500).then((e: any) => e);
    }
  };

  const goDown = () => {
    if (ref?.current) {
      ref.current.bounceInDown(500).then((e: any) => e);
    }
  };

  useEffect(() => {
    if (show) {
      goDownLoading();
      goUp();
    } else {
      goUpLoading();
      goDown();
    }
  }, [show]);

  return (
    <View style={styles.container}>
      <Animatable.View ref={ref}>
        <View style={styles.walletContainer}>
          <StatContainer icon={level_image} iconText={'10'}>
            <Subtitle2 style={styles.textBold}>
              {data && data.MyWallet.Level.total}
            </Subtitle2>
          </StatContainer>
          <StatContainer icon={coin_image}>
            <Subtitle2 style={styles.textBold}>
              {data && data.MyWallet.Coins.total}
            </Subtitle2>
          </StatContainer>
        </View>
        <View style={styles.walletContainer}>
          <StatContainer
            borderStyle={{backgroundColor: STAT_LABEL_COLOR}}
            style={styles.userInfoContainer}
            styleJr={styles.userInfoContainerJr}
            contentStyle={styles.userInfoContent}>
            <Subtitle2
              style={[styles.textBold, styles.textBackground]}
              numberOfLines={1}>
              {data && data.MyWallet.User.username}
            </Subtitle2>
            <StatContainer
              icon={trophy_image}
              style={styles.trophyContainer}
              styleJr={styles.trophyContainerJr}
              logoStyle={styles.trophyIcon}
              borderStyle={styles.trophyBorder}>
              <Subtitle2
                style={[styles.textBold, styles.textRight]}
                numberOfLines={1}>
                {data && data.MyWallet.Trophys.total}
              </Subtitle2>
            </StatContainer>
          </StatContainer>
          <MiniStateContainer icon={config_image} />
          <MiniStateContainer icon={news_image} />
        </View>
      </Animatable.View>
      {show && (
        <Animatable.View style={styles.loadingStat} ref={refLoading}>
          <StatContainer
            icon={zoom_image}
            logoStyle={styles.loadingIcon}
            borderStyle={{backgroundColor: STAT_LABEL_COLOR}}
            style={styles.loadingContainer}
            styleJr={styles.loadingContainerJr}
            logoContainerStyle={styles.loadingIconContainer}
            contentStyle={styles.loadingContent}>
            <H6Title style={styles.loadingTitle}>Buscando un reto...</H6Title>
          </StatContainer>
        </Animatable.View>
      )}
    </View>
  );
};

export default Head;
