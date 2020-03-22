import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {Caption} from '../../../../components/Caption/Caption';
import {styles} from './styles';
import goLogin from '../../../../navigation/navigators/Login';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Caption style={styles.captionTop}>
        Ya estas registrado?{'\n'}
        <Caption style={styles.captionBold} onPress={goLogin}>
          Ingresa
        </Caption>
      </Caption>
      <Caption>
        Al utilizar Ecolote aceptas nuestros{' '}
        <Caption style={styles.captionUndeline}>Terminos & condiciones</Caption>
      </Caption>
    </View>
  );
};
export default Footer;
