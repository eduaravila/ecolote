import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Stepper} from '../../../../components/Stepper/Stepper';
import {popStack} from '../../../../navigation/navigators/stackUtils';
import {StatusTypes} from './types';

const Status: React.FC<StatusTypes> = ({componentId}) => {
  return (
    <View style={styles.constainer}>
      <MiniButton
        onPress={() => popStack(componentId)}
        style={styles.backButton}
        iconName={'arrow-left-drop-circle'}
        iconStyle={styles.iconBack}>
        Back
      </MiniButton>
      <Stepper size={3} active={2} />
    </View>
  );
};

export default Status;
