import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {Navigation} from 'react-native-navigation';
import { BATHROOM_COLOR, REPLACE_COLOR } from '../../../../style/COLOR';
import { GameBadge } from '../../../../components/GameBadge/GameBadge';

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');

interface HeaderType {
  componentId: string;
}

const Header: React.FC<HeaderType> = ({componentId}) => {
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => popStack(componentId)}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Back
      </MiniButton>
      <Navigation.Element elementId="headergamedescription">
        <H5Title>Di adios a las toallitas humedas</H5Title>
      </Navigation.Element>
      <View style={styles.badgeContainer}>
        <GameBadge color={REPLACE_COLOR} logo={replace_icon} />
        <GameBadge color={BATHROOM_COLOR} logo={bathroom_icon} />
        <GameBadge logo={normal_icon} />
      </View>
    </View>
  );
};

export default Header;
