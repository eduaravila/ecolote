import React, {useState, useEffect} from 'react';
import {View, Image, TextInputProps, Button} from 'react-native';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {InputCustom} from '../../../../components/Input/Input';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {
  ECOLOTE_SIGN_UP_USERNAME,
  ECOLOTE_SIGN_UP_CODE,
} from '../../../../navigation/screen_names';

interface bodyType {
  componentId: string;
}

const Body: React.FC<bodyType> = ({componentId}) => {
  const [username, setusername] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [passwordCpy, setpasswordCpy] = useState<string>('');

  const _set_username = (e: TextInputProps): void => {
    setusername(e.value!);
  };

  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        Now select an <Subtitle1 style={styles.textBold}>username</Subtitle1>{' '}
        and your <Subtitle1 style={styles.textBold}>password</Subtitle1>
      </Subtitle1>
      <InputCustom
        placeholder={'Enter your username'}
        value={username}
        keyboardType="default"
        onChange={_set_username}
        style={styles.usernameInput}
      />
      <InputCustom
        placeholder={'Enter your password'}
        value={password}
        keyboardType="default"
        onChange={_set_username}
        style={styles.usernameInput}
      />
      <InputCustom
        placeholder={'Repeat your password'}
        value={passwordCpy}
        keyboardType="default"
        onChange={_set_username}
        style={styles.usernameInput}
      />
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.getcodeButton}
        onPress={() => pushStack(componentId, ECOLOTE_SIGN_UP_CODE)}>
        Get a code in my email
      </ButtonCustom>
    </View>
  );
};

export default Body;
