import React, {useState, useRef} from 'react';
import {Svg, G, Path} from 'react-native-svg';
import {TouchableNativeFeedback, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {InputCustomType} from './types';
import {
  INPUT_BORDER_COLOR,
  INPUT_BORDER_COLOR_ERROR,
  PRIMARY_LIGHT_COLOR,
} from '../../style/COLOR';
import {Overline} from '../Overline/Overline';
import {normalize} from '../../style/UTILS';

const InputCustom = React.forwardRef<any, InputCustomType>(
  (
    {
      borderColor = INPUT_BORDER_COLOR,
      fillColor = 'white',
      block = true,
      textColor = 'black',
      placeHolderColor = INPUT_BORDER_COLOR,
      placeholder,
      style,

      onChangeText,
      textContentType = 'none',
      error = false,
      onSubmitEditing,
      returnKeyType = 'done',
      secureTextEntry = false,
      errorMsg = '',
      keyboardType = 'default',
    },
    ref,
  ) => {
    const refInput = useRef();
    const [togglePassorod, setTogglePassorod] = useState<boolean>(true);

    return (
      <View style={[styles.container, {width: block ? '100%' : '50%'}, style]}>
        <Svg
          width="100%"
          height={'100%'}
          viewBox="0 0 310 56"
          preserveAspectRatio="none">
          <G
            id="Path_135"
            data-name="Path 135"
            transform="translate(3 3)"
            fill={fillColor}>
            <Path
              d="M4,0H300l4,6.061V43.939L300,50H4L0,43.939V6.061Z"
              stroke="none"
            />
            <Path
              d="M 4 0 L 0 6.060623168945313 L 0 43.93937683105469 L 4 50 L 300 50 L 304 43.93937683105469 L 304 6.060623168945313 L 300 0 L 4 0 M 2.385498046875 -3 L 4 -3 L 300 -3 L 301.614501953125 -3 L 302.5038452148438 -1.652542114257813 L 306.5038452148438 4.408084869384766 L 307 5.159873962402344 L 307 6.060623168945313 L 307 43.93937683105469 L 307 44.84012603759766 L 306.5038452148438 45.59191513061523 L 302.5038452148438 51.65254211425781 L 301.614501953125 53 L 300 53 L 4 53 L 2.385498046875 53 L 1.49615478515625 51.65254211425781 L -2.50384521484375 45.59191513061523 L -3 44.84012603759766 L -3 43.93937683105469 L -3 6.060623168945313 L -3 5.159873962402344 L -2.50384521484375 4.408084869384766 L 1.49615478515625 -1.652542114257813 L 2.385498046875 -3 Z"
              stroke="none"
              fill={error ? INPUT_BORDER_COLOR_ERROR : borderColor}
            />
          </G>
        </Svg>
        <TextInput
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry && togglePassorod}
          keyboardType={keyboardType}
          style={[styles.input, {color: textColor}]}
          onChangeText={onChangeText}
          ref={ref}
          textContentType={textContentType}
          placeholder={placeholder}
          placeholderTextColor={placeHolderColor}
          selectionColor={PRIMARY_LIGHT_COLOR}
        />
        {secureTextEntry ? (
          <Icon
            name={togglePassorod ? 'eye' : 'eye-off'}
            size={normalize(24)}
            style={styles.errorIcon}
            onPress={() => setTogglePassorod(p => !p)}
            color={error ? INPUT_BORDER_COLOR_ERROR : 'black'}
          />
        ) : (
          error && (
            <Icon
              name={'alert-octagon'}
              size={normalize(24)}
              style={styles.errorIcon}
              color={INPUT_BORDER_COLOR_ERROR}
            />
          )
        )}

        {error && <Overline style={styles.error}>* {errorMsg}</Overline>}
      </View>
    );
  },
);

export {InputCustom};
