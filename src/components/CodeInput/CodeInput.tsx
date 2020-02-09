import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import validator from 'validator';

import {styles} from './styles';
import {CodeInputTypes} from './types';
import {Overline} from '../Overline/Overline';

const CodeInput: React.FC<CodeInputTypes> = ({
  size,
  style,
  register,
  setValue,
  keyboardType = 'number-pad',
  errors,
  serverError = false,
}) => {
  const [inputs, setInputs] = useState<any>([
    ...Array.apply(null, Array(size)).map((_, i) => useRef(null)),
  ]);

  const [inputsVals, setInputsVals] = useState<string[]>([
    ...Array.apply(null, Array(size)).map((_, i) => ''),
  ]);

  const nextInput = (i: number): void => {
    if (i != size - 1) {
      inputs[i + 1].focus();
    }
    return undefined;
  };
  const backInput = (i: number): void => {
    if (i != 0) {
      inputs[i - 1].focus();
    }
    return undefined;
  };

  return (
    <View style={[styles.container, style]}>
      {Array.apply(null, Array(size)).map((_, i) => {
        return (
          <View
            style={
              errors[`code-${i}`]
                ? styles.inputContainerErr
                : styles.inputContainer
            }
            key={i}>
            <TextInput
              ref={e => {
                inputs[i] = e;
                register(
                  {name: `code-${i}`},
                  {
                    required: true,
                    validate: {
                      value: (val: string) =>
                        validator.isNumeric(val, {no_symbols: true}) &&
                        validator.isLength(val, {min: 1, max: 1}),
                      message: 'invalid username',
                    },
                  },
                );
              }}
              maxLength={1}
              onKeyPress={({nativeEvent}) => {
                if (i == 0) return;

                if (nativeEvent.key == 'Backspace' && !inputsVals[i]) {
                  backInput(i);
                }
              }}
              enablesReturnKeyAutomatically={true}
              style={styles.input}
              placeholder={'-'}
              onChangeText={e => {
                inputsVals[i] = e;
                setValue(`code-${i}`, e);
                if (e !== '') {
                  nextInput(i);
                }
              }}
              onSubmitEditing={() => nextInput(i)}
              keyboardType={keyboardType}
              returnKeyType={i != size - 1 ? 'next' : 'done'}
            />
          </View>
        );
      })}
      {!Object.keys(errors).every(i => !errors[i]) ||
        (serverError && (
          <Overline style={styles.error}>* Invalid code</Overline>
        ))}
    </View>
  );
};

export {CodeInput};
