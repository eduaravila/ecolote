import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {H5Title} from '../../../../components/H5Title/H5Title';
import {ButtonCustom} from '../../../../components/Button/Button';
import {GOOGLE_SIGN_UP_COLOR, FACEBOOK_COLOR} from '../../../../style/COLOR';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {ECOLOTE_SIGN_UP_EMAIL} from '../../../../navigation/screen_names';

const Body: React.FC<bodyTypes> = ({componentId}) => {
  console.log(componentId);

  return (
    <View>
      <H5Title style={styles.title}>{'Welcome to\nEcolote'}</H5Title>
      <ButtonCustom
        borderColor={'transparent'}
        iconName="google"
        iconColor="black"
        fillColor={GOOGLE_SIGN_UP_COLOR}
        textColor={'black'}
        style={styles.button}
        iconStyle={styles.google_icon}>
        Continue with Google
      </ButtonCustom>
      <ButtonCustom
        iconName="facebook"
        fillColor={FACEBOOK_COLOR}
        style={styles.button}
        borderColor={'transparent'}>
        Continue with Facebook
      </ButtonCustom>
      <ButtonCustom
        style={styles.button}
        onPress={() => pushStack(componentId!, ECOLOTE_SIGN_UP_EMAIL)}>
        Sign up FREE
      </ButtonCustom>
    </View>
  );
};

export default Body;
