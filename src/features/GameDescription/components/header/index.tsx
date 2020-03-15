import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {MEDIA_API} from 'react-native-dotenv';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {Navigation} from 'react-native-navigation';
import {BATHROOM_COLOR, REPLACE_COLOR} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {useStoreState} from '../../../../state/store';

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');

interface HeaderType {
  componentId: string;
  title: string;
  type: {
    _id: string;
    name: string;
    image: string;
  };
  zone: {
    _id: string;
    name: string;
    image: string;
  };
  rarity: {
    _id: string;
    name: string;
    image: string;
    color: string;
  };
}

const Header: React.FC<HeaderType> = ({
  componentId,
  title,
  zone,
  type,
  rarity,
}) => {
  let {mediaToken} = useStoreState(state => state.credentials);

  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => popStack(componentId)}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Back
      </MiniButton>
      <Navigation.Element elementId="headergamedescription">
        <H5Title>{title}</H5Title>
      </Navigation.Element>
      <View style={styles.badgeContainer}>
        <GameBadge
          color={'white'}
          logo={MEDIA_API + 'image/' + type.image + '/' + mediaToken}
        />
        <GameBadge
          color={'white'}
          logo={MEDIA_API + 'image/' + zone.image + '/' + mediaToken}
        />
        <GameBadge
          color={rarity.color}
          logo={MEDIA_API + 'image/' + rarity.image + '/' + mediaToken}
        />
      </View>
    </View>
  );
};

export default Header;
