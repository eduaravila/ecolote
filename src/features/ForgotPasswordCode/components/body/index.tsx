import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {CodeInput} from '../../../../components/CodeInput/CodeInput';
import goSignUpSuccess from '../../../../navigation/navigators/SignUpSuccess';
import goForgotPasswordResetePassword from '../../../../navigation/navigators/ForgotPasswordSetNew';

interface bodyType {
  componentId: string;
  token: string;
  email: string;
  check: boolean;
  setCheck: (e: boolean) => void;
  updateStopWatch: (e: number) => void;
  codeInterval: number;
  setToken: (e: string) => void;
}

const RESTORE_PASSWORD_COMPARE_CODE_GQL = gql`
  query RestorePasswordCompareCode($token: String!, $code: String!) {
    RestorePasswordCompareCode(restoreInfo: {code: $code, token: $token}) {
      msg
      code
    }
  }
`;

const RESTORE_PASSWORD_CODE_GQL = gql`
  query RestorePasswordCode($email: String!) {
    RestorePasswordCode(restorePasswordCodeInput: {email: $email}) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyType> = ({
  token,
  email = '',
  check,
  setCheck,
  updateStopWatch,
  codeInterval,
  setToken,
}) => {
  const {register, setValue, handleSubmit, errors, reset} = useForm();
  const [globalCode, setglobalCode] = useState<string>('');
  let [
    restorePasswordCompareCode,
    {data: dataRestorePasswordCompareCode, error, loading},
  ] = useLazyQuery(RESTORE_PASSWORD_COMPARE_CODE_GQL, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({RestorePasswordCompareCode}) => {
      goForgotPasswordResetePassword({
        code: globalCode,
        token,
      });
    },
  });

  let [
    restorePasswordCode,
    {
      data,
      loading: loadingRestorePasswordCode,
      error: errorRestorePasswordCode,
      networkStatus,
    },
  ] = useLazyQuery(RESTORE_PASSWORD_CODE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({RestorePasswordCode}) => {
      setToken(RestorePasswordCode.msg);
      updateStopWatch(3);
    },
  });

  const _resend_verify_code = () => {
    restorePasswordCode({variables: {email}});
  };

  const _set_value = (
    name: string,
    value: string,
    validate: boolean = true,
  ): void => {
    if (check) {
      setCheck(false);
    }

    setValue(name, value, validate);
  };

  const validate_inputs = (vals: any) => {
    let codeArr: string[] = [];
    let code: string = '';
    let keys = Object.keys(vals);
    keys.map(i => (codeArr = [...codeArr, vals[i]]));
    code = codeArr.join('');
    setglobalCode(code);
    if (!loading) {
      console.log(code, token);

      let val = restorePasswordCompareCode({
        variables: {token, code},
      });
    }
  };

  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        Este no es tu correo? {'  '}
      </Subtitle1>
      <Subtitle1 style={[styles.textBold, styles.textUnderline]}>
        {email}
      </Subtitle1>
      <CodeInput
        size={6}
        register={register}
        setValue={_set_value}
        serverError={!!error?.graphQLErrors}
        errors={errors}
      />
      <Subtitle1
        onPress={codeInterval > 0 ? () => {} : _resend_verify_code}
        style={[
          styles.textLabel,
          styles.textBold,
          styles.textUnderline,
          {opacity: codeInterval > 0 ? 0.5 : 1},
        ]}>
        {codeInterval > 0
          ? `Espera para reenviar el codigo. ${Math.trunc(
              codeInterval / 60,
            )} : ${codeInterval % 60} ⏱`
          : 'No recibi el codigo'}
      </Subtitle1>
      <ButtonCustom
        disabled={loading || loadingRestorePasswordCode}
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.continuebutton}
        onPress={handleSubmit(validate_inputs)}>
        Continuar
      </ButtonCustom>
    </View>
  );
};

export default Body;
