import React from 'react';
import {View, Alert} from 'react-native';
import {gql} from 'apollo-boost';

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
import {GameStepper} from '../../../../components/GameStepper/GameStepper';

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');
interface formType {
  email: string;
}

const Body: React.FC<bodyTypes> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <GameBadge
          color={REPLACE_COLOR}
          title="Type"
          name="Replace"
          logo={replace_icon}
        />
        <GameBadge
          color={BATHROOM_COLOR}
          title="Place"
          name="Bathroom"
          logo={bathroom_icon}
        />
        <GameBadge title="Rarity" name="Normal" logo={normal_icon} />
      </View>
      <H6Title style={styles.descriptionText}>
        Please put your <H6Title style={styles.textBold}>username</H6Title> or
        your email and we can send you instructions to recover your{' '}
        <H6Title style={styles.textBold}>password.</H6Title>
      </H6Title>
      <Subtitle1 style={styles.more}>Ver mas...</Subtitle1>
      <GameStepper size={3} active={1} />
    </View>
  );
};

export default Body;
