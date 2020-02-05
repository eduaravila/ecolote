import React, {useState, useEffect} from 'react';
import {
  View,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
import validator from 'validator';
import {useForm} from 'react-hook-form';

import {styles} from './styles';
import {Subtitle1} from '../../../../components/Subtitle1/Subtitle1';
import {InputCustom} from '../../../../components/Input/Input';
import {ButtonCustom} from '../../../../components/Button/Button';
import {PRIMARY_DARK_COLOR} from '../../../../style/COLOR';
import {HairLine} from '../../../../components/HairLine/HairLine';
import {Caption} from '../../../../components/Caption/Caption';
import {pushStack} from '../../../../navigation/navigators/stackUtils';
import {ECOLOTE_SIGN_UP_USERNAME} from '../../../../navigation/screen_names';

interface bodyType {
  componentId: string;
}
type SignupForm = {
  email: string;
};

const Body: React.FC<bodyType> = ({componentId}) => {
  const {register, setValue, handleSubmit, errors} = useForm();

  const validate_inputs = ({email}: SignupForm) => console.log(email, errors);

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
        Let's start with your{' '}
        <Subtitle1 style={styles.textBold}>Email</Subtitle1>
      </Subtitle1>
      <InputCustom
        error={!!errors.email}
        placeholder={'Enter your email'}
        errorMsg={'Invalid email'}
        ref={register(
          {name: 'email'},
          {
            required: true,
            validate: (val: string) => validator.isEmail(val),
          },
        )}
        keyboardType="email-address"
        onChangeText={e => _set_email('email', e)}
        style={styles.emailInput}
      />
      <ButtonCustom
        borderColor={'transparent'}
        fillColor={PRIMARY_DARK_COLOR}
        textColor={'white'}
        onPress={handleSubmit(validate_inputs)}>
        Continue
      </ButtonCustom>
      <HairLine style={styles.hairLine} />
      <Caption style={styles.otherLoginCaption}>Other login options</Caption>
    </View>
  );
};

export default Body;
