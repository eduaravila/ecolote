import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';

import {styles} from './styles';
import {CodeInputTypes} from './types';

const CodeInput: React.FC<CodeInputTypes> = ({
  size,
  style,
  keyboardType = 'number-pad',
}) => {
  const [inputs, setInputs] = useState<any>([
    ...Array.apply(null, Array(size)).map((_, i) => useRef(null)),
  ]);

  const nextInput = (i: number): void => {
    if (i != size - 1) {
      inputs[i + 1].current!.focus();
    }
    return undefined;
  };
  return (
    <View style={[styles.container, style]}>
      {Array.apply(null, Array(size)).map((_, i) => {
        return (
          <View style={styles.inputContainer}>
            <TextInput
              ref={inputs[i]}
              maxLength={1}
              style={styles.input}
              placeholder={'-'}
              onSubmitEditing={() => nextInput(i)}
              keyboardType={keyboardType}
              returnKeyType={i != size - 1 ? 'next' : 'done'}
            />
          </View>
        );
      })}
    </View>
  );
};

export {CodeInput};
