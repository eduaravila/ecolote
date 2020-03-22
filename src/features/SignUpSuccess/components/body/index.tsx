import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {H6Title} from '../../../../components/H6Title/H6Title';
import goLogin from '../../../../navigation/navigators/Login';

let image = require('../../../../assets/img/logo_happy.png');

const Body: React.FC = () => {
  return (
    <View style={styles.constainer}>
      <Image source={image} style={[styles.logo]} />
      <H6Title style={styles.message}>
        Nice, ya tienes tu cuenta en Ecolote!
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
