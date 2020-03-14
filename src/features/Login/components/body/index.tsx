import React, {useRef} from 'react';
import {View, TextInputProps} from 'react-native';
import {useForm} from 'react-hook-form';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';
import validator from 'validator';

import {useStoreActions} from '../../../../state/store';
import {H5Title} from '../../../../components/H5Title/H5Title';
import {ButtonCustom} from '../../../../components/Button/Button';
import {styles} from './styles';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {bodyTypes} from './types';
import {ECOLOTE_SIGN_UP_CODE} from '../../../../navigation/screen_names';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {InputCustom} from '../../../../components/Input/Input';
import goDashboard from '../../../../navigation/navigators/Dashboard';

const LOGIN_GQL = gql`
  query Login($user: String!, $password: String!) {
    Login(accessInfo: {user: $user, password: $password}) {
      token
      media
      code
    }
  }
`;
interface loginForm {
  user: string;
  password: string;
}

const Body: React.FC<bodyTypes> = ({componentId}) => {
  const passwordRef = useRef<any>();

  let {setMediaToken, setToken} = useStoreActions(state => state.credentials);

  const {
    register,
    setValue,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm();

  let [login, {data, loading, error, networkStatus}] = useLazyQuery(LOGIN_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: e => {
      let {Login} = e;
      setMediaToken({token: Login.media});
      setToken({token: Login.token});
      goDashboard();
    },
  });

  const _set_value = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    setValue(name, value, validate);
  };
  const validate_inputs = ({user, password}: loginForm) => {
    if (!loading) {
      let val = login({
        variables: {user, password},
      });
    }
  };
  console.log(error);

  return (
    <View>
      <H5Title style={styles.title}>{'Hola, bienvenido de nuevo.'}</H5Title>
      <InputCustom
        placeholder={'Correo / Usuario'}
        keyboardType="email-address"
        style={styles.userInput}
        error={!!errors.email || !!error?.graphQLErrors}
        onSubmitEditing={() => passwordRef.current!.focus()}
        errorMsg={
          error?.graphQLErrors.length
            ? 'User / Email is not registered'
            : 'Invalid user | email'
        }
        ref={() =>
          register(
            {name: 'user'},
            {
              required: true,
              validate: (val: string) => validator.isLength(val, {min: 1}),
            },
          )
        }
        onChangeText={e => _set_value('user', e)}
      />

      <InputCustom
        placeholder={'Contraseña'}
        keyboardType="default"
        textContentType="newPassword"
        secureTextEntry={true}
        style={styles.userInput}
        error={!!errors.email || !!error?.graphQLErrors}
        onSubmitEditing={handleSubmit(validate_inputs)}
        errorMsg={
          error?.graphQLErrors.length
            ? 'Password is invalid '
            : 'Invalid password'
        }
        ref={e => {
          passwordRef.current = e;

          register(
            {name: 'password'},
            {
              required: true,
              validate: (val: string) => validator.isLength(val, {min: 1}),
            },
          );
        }}
        onChangeText={e => _set_value('password', e)}
      />
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.loginButton}
        onPress={handleSubmit(validate_inputs)}>
        Log in
      </ButtonCustom>
    </View>
  );
};

export default Body;
