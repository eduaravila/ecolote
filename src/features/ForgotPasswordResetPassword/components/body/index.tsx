import React, {useState, useEffect} from 'react';
import {View, TextInputProps} from 'react-native';

import {ButtonCustom} from '../../../../components/Button/Button';
import {styles} from './styles';
import {
  pushStack,
  popStack,
} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {
  ECOLOTE_SIGN_UP_CODE,
  ECOLOTE_FORGOT_PASSWORD_SUCCESS,
} from '../../../../navigation/screen_names';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {InputCustom} from '../../../../components/Input/Input';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';

const Body: React.FC<bodyTypes> = ({componentId}) => {
  const [username, setusername] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const _setpassword = (e: TextInputProps) => {
    setpassword(e.value!);
  };

  const _setusername = (e: TextInputProps) => {
    setusername(e.value!);
  };

  return (
    <View>
      <MiniButton
        onPress={() => popStack(componentId)}
        iconName={'arrow-left-drop-circle'}>
        Back
      </MiniButton>
      <H6Title style={styles.title}>{'Now set your new password'}</H6Title>

      <Subtitle1 style={styles.descriptionText}>
        Please put a password with at least{'\n'}
        <Subtitle1 style={styles.textBold}>* 8 characters</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Uppercase letter</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Lowercase letter</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Numeric character</Subtitle1>
        {'\n'}
      </Subtitle1>
      <InputCustom
        placeholder={'Enter your new password'}
        value={username}
        keyboardType="email-address"
        onChange={_setusername}
        style={styles.userInput}
      />
      <InputCustom
        placeholder={'Repeat your password'}
        value={username}
        keyboardType="email-address"
        onChange={_setusername}
        style={styles.userInput}
      />

      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.sendButton}
        onPress={() => pushStack(componentId, ECOLOTE_FORGOT_PASSWORD_SUCCESS)}>
        Change password
      </ButtonCustom>
    </View>
  );
};

export default Body;
