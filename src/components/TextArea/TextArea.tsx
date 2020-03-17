import React, {useState, useRef} from 'react';
import {Svg, G, Path} from 'react-native-svg';
import {TouchableNativeFeedback, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {TextAreaType} from './types';
import {
  INPUT_BORDER_COLOR,
  INPUT_BORDER_COLOR_ERROR,
  PRIMARY_LIGHT_COLOR,
} from '../../style/COLOR';
import {Overline} from '../Overline/Overline';
import {normalize} from '../../style/UTILS';

const TextArea = React.forwardRef<any, TextAreaType>(
  (
    {
      borderColor = INPUT_BORDER_COLOR,
      fillColor = 'white',
      block = true,
      textColor = 'black',
      placeHolderColor = INPUT_BORDER_COLOR,
      placeholder,
      style,
      multiline = false,
      numberOfLines = 1,
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
          viewBox="0 0 320 126.294"
          preserveAspectRatio="none">
          <G
            id="Path_81-2"
            data-name="Path 81"
            transform="translate(12 9)"
            fill={fillColor}>
            <Path
              d="M 12.10830783843994 103.7935562133789 L 11.66815376281738 103.3534393310547 L -1.060576915740967 90.62682342529297 L -1.5 90.18747711181641 L -1.5 89.56609344482422 L -1.5 12.35393905639648 L -1.5 11.71943950653076 L -1.044692277908325 11.27755451202393 L 11.68403816223145 -1.076368451118469 L 12.12049961090088 -1.499983906745911 L 12.72873115539551 -1.499983906745911 L 292.732177734375 -1.499983906745911 L 293.4820861816406 -1.499983906745911 L 293.9320678710938 -0.900137722492218 L 303.1998901367188 11.45378494262695 L 303.5 11.8538236618042 L 303.5 12.35393905639648 L 303.5 89.56609344482422 L 303.5 90.06620788574219 L 303.1998901367188 90.46624755859375 L 293.9320678710938 102.8202056884766 L 293.4828491210938 103.4190521240234 L 292.7341918945313 103.420051574707 L 12.73073101043701 103.7927093505859 L 12.10830783843994 103.7935562133789 Z"
              stroke="none"
            />
            <Path
              d="M 12.72869873046875 -1.52587890625e-05 L 0 12.35394287109375 L 0 89.56607055664063 L 12.72869873046875 102.2927398681641 L 292.732177734375 101.9200286865234 L 302 89.56607055664063 L 302 12.35394287109375 L 292.732177734375 -1.52587890625e-05 L 12.72869873046875 -1.52587890625e-05 M 11.51223754882813 -3.000015258789063 L 12.72869873046875 -3.000015258789063 L 292.732177734375 -3.000015258789063 L 294.2319030761719 -3.000015258789063 L 295.1319580078125 -1.800300598144531 L 304.3997802734375 10.55365753173828 L 305 11.35373687744141 L 305 12.35394287109375 L 305 89.56607055664063 L 305 90.56627655029297 L 304.3997802734375 91.36636352539063 L 295.1319580078125 103.7203216552734 L 294.2334289550781 104.9180297851563 L 292.7361755371094 104.9200286865234 L 12.73269653320313 105.2927398681641 L 11.48788452148438 105.2944030761719 L 10.6075439453125 104.4142379760742 L -2.12115478515625 91.68756866455078 L -3 90.80886077880859 L -3 89.56607055664063 L -3 12.35394287109375 L -3 11.08498382568359 L -2.089385986328125 10.20115661621094 L 10.63934326171875 -2.152801513671875 L 11.51223754882813 -3.000015258789063 Z"
              stroke="none"
              fill={error ? INPUT_BORDER_COLOR_ERROR : borderColor}
            />
          </G>
        </Svg>
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry && togglePassorod}
          keyboardType={keyboardType}
          style={[styles.input, {color: textColor}]}
          onChangeText={onChangeText}
          ref={ref}
          value=""
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

export {TextArea};
{
  /* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="326" height="126.294" viewBox="0 0 326 126.294">

  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_81)">
    <g id="Path_81-2" data-name="Path 81" transform="translate(12 9)" fill="#fff">
      <path d="M 12.10830783843994 103.7935562133789 L 11.66815376281738 103.3534393310547 L -1.060576915740967 90.62682342529297 L -1.5 90.18747711181641 L -1.5 89.56609344482422 L -1.5 12.35393905639648 L -1.5 11.71943950653076 L -1.044692277908325 11.27755451202393 L 11.68403816223145 -1.076368451118469 L 12.12049961090088 -1.499983906745911 L 12.72873115539551 -1.499983906745911 L 292.732177734375 -1.499983906745911 L 293.4820861816406 -1.499983906745911 L 293.9320678710938 -0.900137722492218 L 303.1998901367188 11.45378494262695 L 303.5 11.8538236618042 L 303.5 12.35393905639648 L 303.5 89.56609344482422 L 303.5 90.06620788574219 L 303.1998901367188 90.46624755859375 L 293.9320678710938 102.8202056884766 L 293.4828491210938 103.4190521240234 L 292.7341918945313 103.420051574707 L 12.73073101043701 103.7927093505859 L 12.10830783843994 103.7935562133789 Z" stroke="none"/>
      <path d="M 12.72869873046875 -1.52587890625e-05 L 0 12.35394287109375 L 0 89.56607055664063 L 12.72869873046875 102.2927398681641 L 292.732177734375 101.9200286865234 L 302 89.56607055664063 L 302 12.35394287109375 L 292.732177734375 -1.52587890625e-05 L 12.72869873046875 -1.52587890625e-05 M 11.51223754882813 -3.000015258789063 L 12.72869873046875 -3.000015258789063 L 292.732177734375 -3.000015258789063 L 294.2319030761719 -3.000015258789063 L 295.1319580078125 -1.800300598144531 L 304.3997802734375 10.55365753173828 L 305 11.35373687744141 L 305 12.35394287109375 L 305 89.56607055664063 L 305 90.56627655029297 L 304.3997802734375 91.36636352539063 L 295.1319580078125 103.7203216552734 L 294.2334289550781 104.9180297851563 L 292.7361755371094 104.9200286865234 L 12.73269653320313 105.2927398681641 L 11.48788452148438 105.2944030761719 L 10.6075439453125 104.4142379760742 L -2.12115478515625 91.68756866455078 L -3 90.80886077880859 L -3 89.56607055664063 L -3 12.35394287109375 L -3 11.08498382568359 L -2.089385986328125 10.20115661621094 L 10.63934326171875 -2.152801513671875 L 11.51223754882813 -3.000015258789063 Z" stroke="none" fill="#9b9b9b"/>
    </g>
  </g>
</svg> */
}
