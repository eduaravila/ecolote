import React, {useRef} from 'react';
import {View, TextInputProps} from 'react-native';
import {gql} from 'apollo-boost';
import {useForm} from 'react-hook-form';
import {useMutation} from '@apollo/react-hooks';
import validator from 'validator';

import {ButtonCustom} from '../../../../components/Button/Button';
import {styles} from './styles';
import {bodyTypes} from './types';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {InputCustom} from '../../../../components/Input/Input';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import goForgotPasswordSuccess from '../../../../navigation/navigators/ForgotPasswordSuccess';

interface formType {
  password: string;
}

const RESTORE_PASSWORD_SET_NET_GQL = gql`
  mutation RestorePasswordSetNew(
    $code: String!
    $token: String!
    $password: String!
  ) {
    RestorePasswordSetNew(
      passwordResetInfo: {code: $code, token: $token, password: $password}
    ) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyTypes> = ({componentId, code, token}) => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm();
  const passwordRef = useRef<any>();
  const passwordRRef = useRef<any>();

  let [
    restorePasswordSetNew,
    {data: dataRestorePasswordSetNew, loading},
  ] = useMutation(RESTORE_PASSWORD_SET_NET_GQL, {
    errorPolicy: 'none',
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      reset();
      goForgotPasswordSuccess();
    },
  });

  const validate_inputs = ({password}: formType) => {
    if (!loading) restorePasswordSetNew({variables: {password, code, token}});
  };

  const _set_value = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    setValue(name, value, validate);
  };
  return (
    <View>
      <H6Title style={styles.title}>{'Escribe tu nueva contraseña'}</H6Title>
      <Subtitle1 style={styles.descriptionText}>
        Por favor ingresa una contraseña con al menos:{'\n'}
        <Subtitle1 style={styles.textBold}>* 8 caracteres</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Letra mayuscula</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Letra minuscula</Subtitle1>
        {'\n'}
        <Subtitle1 style={styles.textBold}>* 1 Caracter numerico</Subtitle1>
        {'\n'}
      </Subtitle1>
      <InputCustom
        placeholder={'Ingresa tu nueva contraseña'}
        keyboardType="default"
        textContentType="newPassword"
        secureTextEntry={true}
        returnKeyType="next"
        error={!!errors.password}
        onSubmitEditing={() => passwordRRef.current!.focus()}
        errorMsg={'8 characters, 1 uppercase, 1 lowecase, 1 number'}
        ref={(e: any) => {
          passwordRef.current = e;
          register(
            {name: 'password'},
            {
              required: true,
              validate: (val: string) =>
                validator.matches(
                  val,
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}/,
                ),
            },
          );
          return e;
        }}
        onChangeText={e => _set_value('password', e)}
        style={styles.userInput}
      />
      <InputCustom
        error={!!errors.passwordR}
        errorMsg={'Invalid password'}
        onSubmitEditing={handleSubmit(validate_inputs)}
        placeholder={'Repite tu contraseña'}
        secureTextEntry={true}
        keyboardType="default"
        textContentType="newPassword"
        ref={(e: any) => {
          passwordRRef.current = e;
          register(
            {name: 'passwordR'},
            {
              required: true,
              validate: (val: string) => val == getValues().password,
            },
          );
          return e;
        }}
        onChangeText={e => _set_value('passwordR', e)}
        style={styles.userInput}
      />

      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        disabled={loading}
        style={styles.sendButton}
        onPress={handleSubmit(validate_inputs)}>
        Cambiar contraseña
      </ButtonCustom>
    </View>
  );
};

export default Body;
