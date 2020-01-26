import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {Caption} from '../../../../components/Caption/Caption';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <HairLine style={styles.hairLine} />
      <Caption style={styles.registerText}>
        Do you don't have already an account?{' '}
        <Caption style={[styles.registerText, styles.textUnderline]}>
          Register here!
        </Caption>
      </Caption>
    </View>
  );
};

export default Footer;
