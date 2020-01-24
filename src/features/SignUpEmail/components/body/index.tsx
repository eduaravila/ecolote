import React, {useState, useEffect} from 'react';
import {View, Image, TextInputProps, Button} from 'react-native';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {InputCustom} from '../../../../components/Input/Input';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {Caption} from '../../../../components/Caption/Caption';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_SIGN_UP_USERNAME} from '../../../../navigation/screen_names';

interface bodyType {
  componentId: string;
}

const Body: React.FC<bodyType> = ({componentId}) => {
  const [email, setemail] = useState<string>('');

  const _set_email = (e: TextInputProps): void => {
    setemail(e.value!);
  };

  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        Let's start with your{' '}
        <Subtitle1 style={styles.textBold}>Email</Subtitle1>
      </Subtitle1>
      <InputCustom
        placeholder={'Enter your email'}
        value={email}
        keyboardType="email-address"
        onChange={_set_email}
        style={styles.emailInput}
      />
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        onPress={() => pushStack(componentId, ECOLOTE_SIGN_UP_USERNAME)}>
        Continue
      </ButtonCustom>
      <HairLine style={styles.hairLine} />
      <Caption style={styles.otherLoginCaption}>Other login options</Caption>
    </View>
  );
};

export default Body;
