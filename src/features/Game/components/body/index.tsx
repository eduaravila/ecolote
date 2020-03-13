import React from 'react';
import {View, Alert} from 'react-native';
import {gql} from 'apollo-boost';
import {MEDIA_API} from 'react-native-dotenv';

import {styles} from './styles';
import {bodyTypes} from './types';
import {
  PRIMARY_DARK_COLOR,
  BATHROOM_COLOR,
  REPLACE_COLOR,
} from '../../../../style/COLOR';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {useStoreState} from '../../../../state/store';

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');
interface formType {
  email: string;
}

const Body: React.FC<bodyTypes> = ({
  componentId,
  type,
  zone,
  rarity,
  subtitle,
}) => {
  let {mediaToken} = useStoreState(state => state.credentials);

  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <GameBadge
          color={'white'}
          title="Type"
          name={type.name}
          logo={MEDIA_API + 'image/' + type.image + '/' + mediaToken}
        />
        <GameBadge
          color={'white'}
          title="Place"
          name={zone.name}
          logo={MEDIA_API + 'image/' + zone.image + '/' + mediaToken}
        />
        <GameBadge
          color={rarity.color}
          title="Rarity"
          name={rarity.name}
          logo={MEDIA_API + 'image/' + rarity.image + '/' + mediaToken}
        />
      </View>
      <H6Title style={styles.descriptionText}>{subtitle}</H6Title>
      <HairLine />
    </View>
  );
};

export default Body;
