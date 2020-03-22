import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {Caption} from '../../../../components/Caption/Caption';
import goAccess from '../../../../navigation/navigators/Access';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <HairLine style={styles.hairLine} />
      <Caption style={styles.registerText}>
        Aun no tienes una cuenta en Ecolote?
        {'\n'}
        <Caption
          style={[styles.registerText, styles.textUnderline]}
          onPress={goAccess}>
          Registrate!{' '}
        </Caption>
      </Caption>
    </View>
  );
};

export default Footer;
