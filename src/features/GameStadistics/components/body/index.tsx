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

const replace_icon = require('../../../../assets/img/replace.png');
const bathroom_icon = require('../../../../assets/img/bathroom.png');
const normal_icon = require('../../../../assets/img/normal.png');
interface formType {
  email: string;
}

const Body: React.FC<bodyTypes> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionText}>
        <H6Title style={styles.left}>Reto:</H6Title>
        <H6Title style={styles.right}>Di adios a las toallitas humedas</H6Title>
      </View>
      <View style={styles.descriptionText}>
        <H6Title style={styles.left}>Puntaje mas alto:</H6Title>
        <H6Title style={styles.right}>1000</H6Title>
      </View>
      <HairLine />
      <View style={styles.descriptionText}>
        <H6Title style={styles.left}>Completado:</H6Title>
        <H6Title style={styles.right}>1000</H6Title>
      </View>
      <View style={styles.descriptionText}>
        <H6Title style={styles.left}>Antes de 24h:</H6Title>
        <H6Title style={styles.right}>1000</H6Title>
      </View>
      <View style={styles.descriptionText}>
        <H6Title style={styles.left}>Normal:</H6Title>
        <H6Title style={styles.right}>1000</H6Title>
      </View>
      <H6Title style={styles.bonus}>X2 foto</H6Title>
      <H6Title style={styles.bonus}>X3 Experiencia</H6Title>
      <HairLine />
      <H6Title style={styles.total}>6600</H6Title>
      <H6Title style={styles.grade}>Grade +A</H6Title>
    </View>
  );
};

export default Body;
