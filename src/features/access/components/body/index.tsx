import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {H5Title} from '../../../../components/H5Title/H5title';
import {ButtonCustom} from '../../../../components/Button/Button';
import {GOOGLE_SIGN_UP_COLOR, FACEBOOK_COLOR} from '../../../../style/COLOR';
import {styles} from './styles';

const Body: React.FC = () => {
  return (
    <View>
      <H5Title content={'Welcome to\nEcolote'} style={styles.title} />
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
      <ButtonCustom style={styles.button}>Sign up FREE</ButtonCustom>
    </View>
  );
};

export default Body;
