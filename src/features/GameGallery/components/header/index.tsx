import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {Navigation} from 'react-native-navigation';
import {
  BATHROOM_COLOR,
  REPLACE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_LIGHT_COLOR,
} from '../../../../style/COLOR';
import {GameBadge} from '../../../../components/GameBadge/GameBadge';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {InputCustom} from '../../../../components/Input/Input';
import {normalize} from '../../../../style/UTILS';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';

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
      <H6Title style={styles.descriptionLabel}>Algunas fotos.</H6Title>
      <InputCustom
        multiline
        numberOfLines={5}
        borderColor={'transparent'}
        placeholder={'Cuentanos tu asombrosa historia aqui...'}
        onSubmitEditing={() => null}
        style={{
          height: normalize(150),
        }}
      />
      <Subtitle2>
        Esto es opcional, pero te ayudara a obtener mas monedas
      </Subtitle2>
    </View>
  );
};

export default Header;
