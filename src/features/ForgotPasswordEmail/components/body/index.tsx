import React from 'react';
import {View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import validator from 'validator';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';

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
import goForgotPasswordCode from '../../../../navigation/navigators/ForgotPasswordCode';

interface formType {
  email: string;
}

const RESTORE_PASSWORD_CODE_GQL = gql`
  query RestorePasswordCode($email: String!) {
    RestorePasswordCode(restorePasswordCodeInput: {email: $email}) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyTypes> = ({componentId}) => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm();

  let [
    restorePasswordCode,
    {data, loading, error, networkStatus},
  ] = useLazyQuery(RESTORE_PASSWORD_CODE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({RestorePasswordCode}) => {
      let {email} = getValues();
      reset();
      goForgotPasswordCode({
        token: RestorePasswordCode.msg,
        email,
      });
    },
  });

  const validate_inputs = ({email}: formType) => {
    if (!loading) {
      let val = restorePasswordCode({
        variables: {email},
      });
    }
  };

  const _set_email = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    setValue(name, value, validate);
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
        ref={() => {
          register(
            {name: 'email'},
            {required: true, validate: (val: string) => validator.isEmail(val)},
          );
        }}
        placeholder={'Enter your Email / Username'}
        keyboardType="email-address"
        onSubmitEditing={handleSubmit(validate_inputs)}
        onChangeText={(e: string) => _set_email('email', e)}
        style={styles.userInput}
      />

      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.sendButton}
        onPress={handleSubmit(validate_inputs)}>
        Send
      </ButtonCustom>
    </View>
  );
};

export default Body;
