import React from 'react';
import {View, Text} from 'react-native';
import {H3Title} from '../../../../components/H3Title/H3Title';
import {StatContainer} from '../../../../components/StatContainer/StatContainer';
import {MiniStateContainer} from '../../../../components/MiniStatContainer/MiniStatContainer';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';
import {styles} from './styles';
import {STAT_LABEL_COLOR} from '../../../../style/COLOR';

const coin_image = require('../../../../assets/img/dinero_es_dinero.png');
const level_image = require('../../../../assets/img/level.png');
const trophy_image = require('../../../../assets/img/trophy.png');
const config_image = require('../../../../assets/img/cog.png');
const news_image = require('../../../../assets/img/newspaper.png');

const Head: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
        <StatContainer icon={level_image} iconText={'10'}>
          <Subtitle2 style={styles.textBold}>100/299</Subtitle2>
        </StatContainer>
        <StatContainer icon={coin_image}>
          <Subtitle2 style={styles.textBold}>100</Subtitle2>
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
            TUMATADOR
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
              2121
            </Subtitle2>
          </StatContainer>
        </StatContainer>
        <MiniStateContainer icon={config_image} />
        <MiniStateContainer icon={news_image} />
      </View>
    </View>
  );
};

export default Head;
