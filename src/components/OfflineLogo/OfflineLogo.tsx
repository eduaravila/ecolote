import React, {useState, useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import {useStoreState, useStoreActions} from '../../state/store';
import {styles} from './styles';
import {H5Title} from '../H5Title/H5Title';
import {Subtitle2} from '../Subtitle2/Subtitle2';
import {Subtitle1} from '../Subtitle1/Subtitle1';
import {PRIMARY_DARK_COLOR} from '../../style/COLOR';
const logo = require('../../assets/img/error.png');

interface OfflineLogoType {
  onPress: () => void;
}

const OfflineLogo: React.FC<OfflineLogoType> = ({onPress}) => {
  let {online} = useStoreState(state => state.network);
  let {setRefetch} = useStoreActions(state => state.network);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <H5Title>Conectate a internet</H5Title>
      <Subtitle2>
        No tienes conexion a internet, intenta conectarte a una red con acceso a
        internet
      </Subtitle2>

      {online ? (
        <Subtitle1
          onPress={() => {
            onPress();
            setRefetch({refetch: true});
          }}
          style={styles.retry}>
          Reintentar
        </Subtitle1>
      ) : (
        <ActivityIndicator
          size="large"
          color={PRIMARY_DARK_COLOR}
          style={styles.offline}
        />
      )}
    </View>
  );
};
export {OfflineLogo};
