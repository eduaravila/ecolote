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
import {Stepper} from '../../../../components/Stepper/Stepper';
import {useStoreActions} from '../../../../state/store';

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
  let {setToken} = useStoreActions(state => state.credentials);

  let [
    restorePasswordCode,
    {data, loading, error, networkStatus},
  ] = useLazyQuery(RESTORE_PASSWORD_CODE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({RestorePasswordCode}) => {
      let {email} = getValues();
      reset();
      setToken({token: RestorePasswordCode.msg});
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
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'flex-start',
        }}
        onPress={() => popStack(componentId)}
        iconName={'arrow-left-drop-circle'}>
        Volver
      </MiniButton>
      <Stepper size={3} active={1} />
      <H6Title style={styles.title}>{'Olvidaste tu contraseña?'}</H6Title>

      <Subtitle1 style={styles.descriptionText}>
        Ingresa tu <Subtitle1 style={styles.textBold}>usuario</Subtitle1> o tu{' '}
        <Subtitle1 style={styles.textBold}>email</Subtitle1> y podremos enviarte
        las instrucciones para que establescas una nueva{' '}
        <Subtitle1 style={styles.textBold}>contraseña.</Subtitle1>
      </Subtitle1>
      <InputCustom
        ref={() => {
          register({name: 'email'}, {required: true});
        }}
        error={!!error}
        errorMsg={'Invalid username or email'}
        placeholder={'Ingresa tu usuario / email'}
        keyboardType="email-address"
        onSubmitEditing={handleSubmit(validate_inputs)}
        onChangeText={(e: string) => _set_email('email', e)}
        style={styles.userInput}
      />

      <ButtonCustom
        disabled={loading}
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.sendButton}
        onPress={handleSubmit(validate_inputs)}>
        Enviar
      </ButtonCustom>
    </View>
  );
};

export default Body;
