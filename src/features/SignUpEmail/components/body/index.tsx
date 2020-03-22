import React, {useState} from 'react';
import {View} from 'react-native';
import validator from 'validator';
import {useForm} from 'react-hook-form';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {InputCustom} from '../../../../components/Input/Input';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {Caption} from '../../../../components/Caption/Caption';
import {pushStackWithProps} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_SIGN_UP_USERNAME} from '../../../../navigation/screen_names';

interface bodyType {
  componentId: string;
}
type SignupForm = {
  email: string;
};

const CHECK_USER_EMAIL_IS_AVAILABLE_GQL = gql`
  query CheckUserEmailAvailable($username: String, $email: String) {
    CheckUserEmailAvailable(userInfo: {username: $username, email: $email}) {
      msg
      code
    }
  }
`;

const Body: React.FC<bodyType> = ({componentId}) => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm();
  let [
    checkUserAvailable,
    {data, loading, error, networkStatus},
  ] = useLazyQuery(CHECK_USER_EMAIL_IS_AVAILABLE_GQL, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
    onCompleted: () => {
      let {email} = getValues();
      reset();
      if (data && !loading) {
        pushStackWithProps(componentId, ECOLOTE_SIGN_UP_USERNAME, {email});
      }
    },
  });

  const validate_inputs = ({email}: SignupForm) => {
    if (!loading) {
      let val = checkUserAvailable({
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
    <View style={styles.constainer}>
      <Subtitle1 style={styles.textLabel}>
        Comenzemos con tu <Subtitle1 style={styles.textBold}>Correo</Subtitle1>
      </Subtitle1>
      <InputCustom
        error={!!errors.email || !!error?.graphQLErrors}
        placeholder={'Ingresa tu correo'}
        onSubmitEditing={handleSubmit(validate_inputs)}
        errorMsg={
          error?.graphQLErrors.length
            ? 'Email already registered '
            : 'Invalid email'
        }
        ref={() =>
          register(
            {name: 'email'},
            {
              required: true,
              validate: (val: string) => validator.isEmail(val),
            },
          )
        }
        keyboardType="email-address"
        onChangeText={e => _set_email('email', e)}
        style={styles.emailInput}
      />
      <ButtonCustom
        disabled={loading}
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        onPress={handleSubmit(validate_inputs)}>
        Continuar
      </ButtonCustom>
      <HairLine style={styles.hairLine} />
    </View>
  );
};

export default Body;
