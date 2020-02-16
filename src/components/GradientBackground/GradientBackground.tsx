import React, {useState, useRef, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, Button, Text, Animated} from 'react-native';

import {GradientBackgroundType} from './types';
import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';
import {styles} from './styles';
import {normalize} from '../../style/UTILS';

import * as Animatable from 'react-native-animatable';
import {useStoreState} from '../../state/store';

const GradientBackground: React.FC<GradientBackgroundType> = ({
  colors = [PRIMARY_COLOR, PRIMARY_LIGHT_COLOR],
  start = {x: 1, y: 0.2},
  end = {x: 1, y: 0.7},
  children,
  messageRef = useRef(null),
}) => {
  const messageScale = new Animated.Value(0);
  
  const [paddingBottom, setpaddingBottom] = useState<number>(normalize(0));
  let {msg, show} = useStoreState(state => state.networkStatus);

  const bounce = () => {
    if (messageRef?.current) {
      messageRef.current
        .animate({
          0: {
            height: 0,
          },
          1: {
            height: normalize(20),
          },
        })
        .then((endState: any) =>
          console.log(
            endState.finished ? 'bounce finished' : 'bounce cancelled',
          ),
        );
    }
  };
  const bounceOff = () => {
    if (messageRef?.current) {
      messageRef.current
        .animate({
          0: {
            height: normalize(20),
          },
          1: {
            height: normalize(0),
          },
        })
        .then((endState: any) =>
          console.log(
            endState.finished ? 'bounce finished' : 'bounce cancelled',
          ),
        );
    }
  };
  useEffect(() => {
    if (show) {
      bounce();
    } else {
      bounceOff();
    }
  }, [show]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      scrollEnabled={true}
      keyboardShouldPersistTaps={'handled'}
      onKeyboardDidShow={() => setpaddingBottom(normalize(100))}
      onKeyboardDidHide={() => setpaddingBottom(normalize(0))}>
      <LinearGradient
        colors={[...colors]}
        start={start}
        end={end}
        style={[styles.container]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{height: '100%', width: '100%'}}
          contentContainerStyle={{
            height: '100%',
            paddingBottom,
          }}>
          {children}
        </ScrollView>
      </LinearGradient>
      {show && (
        <Animatable.View style={styles.messageContainer} ref={messageRef}>
          <Animatable.Text style={styles.messageText}>{msg}</Animatable.Text>
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default GradientBackground;
