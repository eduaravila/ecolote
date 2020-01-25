import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Stepper} from '../../../../components/Stepper/Stepper';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import { HeaderTypes} from './types';

const Header: React.FC<HeaderTypes> = ({componentId}) => {
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => popStack(componentId)}
        style={styles.backButton}
        iconName={'arrow-left-drop-circle'}
        iconStyle={styles.iconBack}>
        Back
      </MiniButton>
      <Stepper size={3} active={3} />
    </View>
  );
};

export default Header;
