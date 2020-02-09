import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {gql} from 'apollo-boost';
import {useMutation, useLazyQuery} from '@apollo/react-hooks';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {CodeInput} from '../../../../components/CodeInput/CodeInput';
import goSignUpSuccess from '../../../../navigation/navigators/SignUpSuccess';
import goAccessEmail from '../../../../navigation/navigators/AccessEmail';

interface bodyType {
  componentId: string;
  token: string;
  email: string;
  username: string;
  check: boolean;
  setCheck: (e: boolean) => void;
  updateStopWatch: (e: number) => void;
  codeInterval: number;
  setToken: (e: string) => void;
}

const VERIFY_ACCOUNT_GQL = gql`
  mutation VerifyAccount($token: String!, $code: String!) {
    VerifyAccount(accountInfo: {code: $code, token: $token}) {
      msg
      code
    }
  }
`;

const RESEND_VERIFY_CODE = gql`
  query ResendVerifyCode($username: String!) {
    ResendVerifyCode(resendCodeInfo: {username: $username}) {
      msg
      code
    }
  }
`;

const DELETE_PRE_USER = gql`
  mutation DeletePreUser($username: String!) {
    DeletePreUser(preUserInfo: {username: $username}) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyType> = ({
  componentId,
  token,
  email = '',
  username,
  check,
  setCheck,
  updateStopWatch,
  codeInterval,
  setToken,
}) => {
  const {register, setValue, handleSubmit, errors, reset} = useForm();

  let [verifyAccount, {data: dataVerifyAccount, error, loading}] = useMutation(
    VERIFY_ACCOUNT_GQL,
    {
      notifyOnNetworkStatusChange: true,
      onError: e => e,
      onCompleted: ({VerifyAccount}) => {
        goSignUpSuccess();
      },
    },
  );

  let [deletePreUser, {loading: loadingDeletePreUser}] = useMutation(
    DELETE_PRE_USER,
    {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
      onError: e => {
        Alert.alert('cant go back');
      },
      onCompleted: () => {
        goAccessEmail();
      },
    },
  );

  const _delete_pre_user = () => {
    deletePreUser({variables: {username}});
  };

  let [
    resendVerifyCode,
    {data, loading: resendVerifyCodeLoading, error: resendVerifyCodeError},
  ] = useLazyQuery(RESEND_VERIFY_CODE, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: ({ResendVerifyCode}) => {
      setToken(ResendVerifyCode.msg);
      updateStopWatch(3);
    },
    onError: () => updateStopWatch(0.1),
  });

  const _resend_verify_code = () => {
    resendVerifyCode({variables: {username}});
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

    if (!loading) {
      let val = verifyAccount({
        variables: {token, code},
      });
    }
  };

  return (
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        {username} This is not your email? {'  '}
      </Subtitle1>
      <Subtitle1
        style={[styles.textBold, styles.textUnderline]}
        onPress={_delete_pre_user}>
        {email} sss
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
          ? `Wait to resend the code ${Math.trunc(
              codeInterval / 60,
            )} : ${codeInterval % 60} ⏱`
          : 'I did not receive the code'}
      </Subtitle1>
      <ButtonCustom
        disabled={loading || resendVerifyCodeLoading}
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        style={styles.continuebutton}
        onPress={handleSubmit(validate_inputs)}>
        Continue
      </ButtonCustom>
    </View>
  );
};

export default Body;
