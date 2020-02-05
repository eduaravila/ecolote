import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {styles} from './styles';
import {Overline} from '../../../../components/Overline/Overline';
import {PRIMARY_COLOR} from '../../../../style/COLOR';

const Footer: React.FC = () => {
  const [termAndConditions, setTermAndConditions] = useState<boolean>(false);

  const _setTermsAndConditions = () => {
    setTermAndConditions(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <CheckBox
        onPress={_setTermsAndConditions}
        checked={termAndConditions}
        uncheckedColor={'white'}
        checkedColor={'white'}
      />
      <Overline style={styles.overline}>Accept the terms & conditions</Overline>
    </View>
  );
};
export default Footer;
