import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {Caption} from '../../../../components/Caption/Caption';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_FORGOT_PASSWORD_EMAIL} from '../../../../navigation/screen_names';
import {footerTypes} from './types';
import goAccess from '../../../../navigation/navigators/Access';

const Footer: React.FC<footerTypes> = ({componentId}) => {
  return (
    <View style={styles.container}>
      <Caption
        style={[styles.boldText, styles.forgotPasswordText]}
        onPress={() => pushStack(componentId, ECOLOTE_FORGOT_PASSWORD_EMAIL)}>
        Olvidaste tu contraseña?
      </Caption>
      <Caption style={styles.captionTop}>
        Aun no tienes una cuenta en Ecolote?
        {'\n'}
        <Caption style={styles.captionBold} onPress={goAccess}>
          Registrate!{' '}
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
