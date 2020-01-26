import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {H6Title} from '../../../../components/H6Title/H6Title';
import goLogin from '../../../../navigation/navigators/Login';
import {random_limit} from '../../../../utils/random';

let image = require('../../../../assets/img/logo_happy.png');
let image_start = require('../../../../assets/img/logo_happy_stars.png');

let images = [image, image_start];

const Body: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <Image source={images[random_limit(1, 0)]} style={[styles.logo]} />
      <H6Title style={styles.message}>
        Nice, you have a new password now you can login
      </H6Title>
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.loginButton}
        onPress={goLogin}>
        Login
      </ButtonCustom>
    </View>
  );
};

export default Body;
