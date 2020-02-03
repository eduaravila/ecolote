import React, {useState, useEffect} from 'react';
import {View, TextInputProps} from 'react-native';

import {ButtonCustom} from '../../../../components/Button/Button';
import {styles} from './styles';
import {
  pushStack,
  popStack,
} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD} from '../../../../navigation/screen_names';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {InputCustom} from '../../../../components/Input/Input';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {MiniButton} from '../../../../components/MiniButton/MiniButton';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';

const Body: React.FC<bodyTypes> = ({componentId}) => {
  const [username, setusername] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const _setpassword = (e: string) => {
    setpassword(e);
  };

  const _setusername = (e: string) => {
    setusername(e);
  };

  return (
    <View>
      <MiniButton
        onPress={() => popStack(componentId)}
        iconName={'arrow-left-drop-circle'}>
        Back
      </MiniButton>
      <H6Title style={styles.title}>{'You forgot your password?'}</H6Title>

      <Subtitle1 style={styles.descriptionText}>
        Please put your <Subtitle1 style={styles.textBold}>username</Subtitle1>{' '}
        or your email and we can send you instructions to recover your{' '}
        <Subtitle1 style={styles.textBold}>password.</Subtitle1>
      </Subtitle1>
      <InputCustom
        placeholder={'Enter your Email / Username'}
        keyboardType="email-address"
        onChangeText={_setusername}
        style={styles.userInput}
      />

      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.sendButton}
        onPress={() =>
          pushStack(componentId, ECOLOTE_FORGOT_PASSWORD_RESET_PASSWORD)
        }>
        Send
      </ButtonCustom>
    </View>
  );
};

export default Body;
