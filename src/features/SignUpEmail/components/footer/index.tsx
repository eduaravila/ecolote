import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {styles} from './styles';
import {Overline} from '../../../../components/Overline/Overline';
import {PRIMARY_COLOR} from '../../../../style/COLOR';
import {Subtitle2} from '../../../../components/Subtitle2/Subtitle2';

const Footer: React.FC = () => {
  const [termAndConditions, setTermAndConditions] = useState<boolean>(false);

  const _setTermsAndConditions = () => {
    setTermAndConditions(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Overline style={styles.overline}>
        Al presionar el boton tu Aceptas los terminos & condiciones
      </Overline>
    </View>
  );
};
export default Footer;
