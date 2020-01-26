import React, {useState, useEffect} from 'react';
import {View, TextInputProps} from 'react-native';

import {H5Title} from '../../../../components/H5Title/H5Title';
import {ButtonCustom} from '../../../../components/Button/Button';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {ECOLOTE_SIGN_UP_CODE} from '../../../../navigation/screen_names';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {InputCustom} from '../../../../components/Input/Input';
import {Caption} from '../../../../components/Caption/Caption';

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
      <H5Title style={styles.title}>{'Welcome Back'}</H5Title>
      <InputCustom
        placeholder={'Email / Username'}
        value={username}
        keyboardType="email-address"
        onChange={_setusername}
        style={styles.userInput}
      />
      <InputCustom
        placeholder={'Password'}
        value={password}
        keyboardType="email-address"
        onChange={_setpassword}
        style={styles.userInput}
      />
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.loginButton}
        onPress={() => pushStack(componentId, ECOLOTE_SIGN_UP_CODE)}>
        Log in
      </ButtonCustom>
      
    </View>
  );
};

export default Body;
