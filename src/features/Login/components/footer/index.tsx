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
        Forgot Your Password?
      </Caption>
      <Caption style={styles.captionTop}>
        Still not have an Ecolote account?
        {'\n'}
        <Caption style={styles.captionBold} onPress={goAccess}>
          Sign Up
        </Caption>
      </Caption>
      <Caption>
        By using Ecolote you agree to our{' '}
        <Caption style={styles.captionUndeline}>Terms & conditions</Caption>
      </Caption>
    </View>
  );
};
export default Footer;
