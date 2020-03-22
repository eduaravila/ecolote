import React, {useRef} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {gql} from 'apollo-boost';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import validator from 'validator';
import {useStoreActions} from '../../../../state/store';
import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {InputCustom} from '../../../../components/Input/Input';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import goSignUpCode from '../../../../navigation/navigators/SignUpCode';

interface bodyType {
  componentId: string;
  email: string;
}

type SignupForm = {
  username: string;
  password: string;
  passwordR: string;
};

const CHECK_USER_EMAIL_IS_AVAILABLE_GQL = gql`
  query CheckUserEmailAvailable($username: String, $email: String) {
    CheckUserEmailAvailable(userInfo: {username: $username, email: $email}) {
      msg
      code
    }
  }
`;
const REGISTER_USER_GQL = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    RegisterUser(
      registerInfo: {username: $username, password: $password, email: $email}
    ) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyType> = ({componentId, email}) => {
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

  let {setToken} = useStoreActions(state => state.credentials);

  let [registerUser, {data: dataRegisterUser}] = useMutation(
    REGISTER_USER_GQL,
    {
      errorPolicy: 'none',
      notifyOnNetworkStatusChange: true,
      onCompleted: ({RegisterUser}) => {
        let {username} = getValues();
        reset();
        setToken({token: RegisterUser.msg});
        goSignUpCode({
          token: RegisterUser.msg,
          email,
          username,
        });
      },
    },
  );

  let [
    checkUserAvailable,
    {data, loading, error, networkStatus},
  ] = useLazyQuery(CHECK_USER_EMAIL_IS_AVAILABLE_GQL, {
    errorPolicy: 'none',
    notifyOnNetworkStatusChange: true,
    onCompleted: val => {
      let {password, username} = getValues();
      registerUser({variables: {username, password, email}});
    },
  });

  const validate_inputs = ({username, password, passwordR}: SignupForm) => {
    if (!loading) checkUserAvailable({variables: {username}});
  };

  const _set_value = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    setValue(name, value, validate);
  };

  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        Ahora elige un <Subtitle1 style={styles.textBold}>usuario</Subtitle1> y
        tu <Subtitle1 style={styles.textBold}>contraseña</Subtitle1>.
      </Subtitle1>
      <InputCustom
        placeholder={'Ingresa tu nuevo usuario'}
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current!.focus()}
        error={!!errors.username || !!error}
        errorMsg={error ? 'Username already registered ' : 'Invalid username'}
        ref={() =>
          register(
            {name: 'username'},
            {
              required: true,
              validate: {
                value: (val: string) =>
                  validator.isLength(val, {min: 1, max: 15}),
                message: 'invalid username',
              },
            },
          )
        }
        onChangeText={e => _set_value('username', e)}
        style={styles.usernameInput}
      />
      <InputCustom
        placeholder={'Ingresa tu contraseña'}
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
        style={styles.usernameInput}
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
        style={styles.usernameInput}
      />
      <ButtonCustom
        disabled={loading}
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.getcodeButton}
        onPress={handleSubmit(validate_inputs)}>
        Enviar el codigo a mi correo
      </ButtonCustom>
    </View>
  );
};

export default Body;
