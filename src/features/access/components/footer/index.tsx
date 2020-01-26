import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {Caption} from '../../../../components/Caption/Caption';
import {styles} from './styles';
import goLogin from '../../../../navigation/navigators/Login';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Caption style={styles.captionTop}>
        Already have an Ecolote account?{'\n'}
        <Caption style={styles.captionBold} onPress={goLogin}>
          Log in
        </Caption>
      </Caption>
      <Caption>
        By using Ecolote you agree to our{' '}
        <Caption style={styles.captionUndeline}>Terms & contitions</Caption>
      </Caption>
    </View>
  );
};
export default Footer;
