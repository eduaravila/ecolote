import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Orientation from 'react-native-orientation';
import LinearGradient from 'react-native-linear-gradient';

import {GradientBackgroundType} from './types';
import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';
import {styles} from './styles';
import {ScrollView} from 'react-native';
import {normalize} from '../../style/UTILS';

const GradientBackground: React.FC<GradientBackgroundType> = ({
  colors = [PRIMARY_COLOR, PRIMARY_LIGHT_COLOR],
  start = {x: 1, y: 0.2},
  end = {x: 1, y: 0.7},
  children,
}) => {
  
  const [paddingBottom, setpaddingBottom] = useState<number>(normalize(0));

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      scrollEnabled={true}
      onKeyboardDidShow={() => setpaddingBottom(normalize(100))}
      onKeyboardDidHide={() => setpaddingBottom(normalize(0))}>
      <LinearGradient
        colors={[...colors]}
        start={start}
        end={end}
        style={[styles.container]}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{height: '100%', width: '100%'}}
          contentContainerStyle={{
            height: '100%',
            paddingBottom,
          }}>
          {children}
        </ScrollView>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default GradientBackground;
