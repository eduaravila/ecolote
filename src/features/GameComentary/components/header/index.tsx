import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import validator from 'validator';

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
import {TextArea} from '../../../../components/TextArea/TextArea';

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');

interface HeaderType {
  componentId: string;
  register: any;
  _set_value: (name: string, value: string, validate?: boolean) => void;
  error: boolean;
}

const Header: React.FC<HeaderType> = ({
  componentId,
  register,
  _set_value,
  error = false,
}) => {
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => {
          popStack(componentId);
        }}
        iconName={'arrow-left-drop-circle'}
        style={styles.back}>
        Volver
      </MiniButton>
      <Navigation.Element elementId="headergamedescription">
        <H5Title>Di adios a las toallitas humedas</H5Title>
      </Navigation.Element>
      <H6Title style={styles.descriptionLabel}>Una cosa mas.</H6Title>
      <Subtitle2>
        Esto es opcional, pero te ayudara a obtener mas puntos
      </Subtitle2>
      <TextArea
        multiline
        numberOfLines={5}
        error={error}
        placeholder={'Cuentanos tu asombrosa historia aqui...'}
        onSubmitEditing={() => null}
        style={{
          height: normalize(180),
        }}
        errorMsg={'Invalid, max 280 characters, min 0'}
        ref={() =>
          register(
            {name: 'commentary'},
            {
              required: false,
              maxLength: 280,
            },
          )
        }
        onChangeText={e => _set_value('commentary', e)}
      />
    </View>
  );
};

export default Header;
