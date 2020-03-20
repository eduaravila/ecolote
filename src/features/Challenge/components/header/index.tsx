import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {StatContainer} from '../../../../components/StatContainer/StatContainer';
import {MiniStateContainer} from '../../../../components/MiniStatContainer/MiniStatContainer';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {styles} from './styles';
import {
  STAT_LABEL_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_DARK_COLOR,
} from '../../../../style/COLOR';
import {H3Title} from '../../../../components/H3Title/H3Title';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {normalize} from '../../../../style/UTILS';
import {LoadingSkeleton} from '../../../../components/LoadingSkeleton/LoadingSkeleton';

const coin_image = require('../../../../assets/img/dinero_es_dinero.png');
const level_image = require('../../../../assets/img/level.png');
const trophy_image = require('../../../../assets/img/trophy.png');
const config_image = require('../../../../assets/img/more.png');
const news_image = require('../../../../assets/img/newspaper.png');
const zoom_image = require('../../../../assets/img/zoom.gif');

interface HeadType {
  show: boolean;
  ref?: any;
  refLoading?: any;
  data: any;
  toggleShow: (e: boolean) => void;
}

const Head: React.FC<HeadType> = ({
  show,
  ref = useRef(null),
  refLoading = useRef(null),
  data,
  toggleShow,
}) => {
  const [initialDelay, setInitialDelay] = useState(true);
  let [loadingSize] = useState(new Animated.Value(0));

  const goUpLoading = () => {
    if (refLoading?.current) {
      refLoading.current.bounceOutUp(500).then((e: any) => e);
    }
  };
  const goDownLoading = () => {
    if (refLoading?.current) {
      refLoading.current.bounceInDown(500).then((e: any) => e);
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
    <View
      style={[
        styles.container,
        {height: show ? normalize(150) : normalize(100)},
      ]}>
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
          <MiniStateContainer
            icon={config_image}
            onPress={() => toggleShow(true)}
          />
          <MiniStateContainer icon={news_image} onPress={() => {}} />
        </View>
      </Animatable.View>

      <Animatable.View style={styles.loadingStat} ref={refLoading}>
        {show && (
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
        )}
      </Animatable.View>
    </View>
  );
};

export default Head;
