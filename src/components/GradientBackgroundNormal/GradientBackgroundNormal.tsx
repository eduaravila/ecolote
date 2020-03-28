import React, {useState, useRef, useEffect, Fragment} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, Button, Text, Animated} from 'react-native';

import {GradientBackgroundType} from './types';
import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR} from '../../style/COLOR';
import {styles} from './styles';
import {normalize} from '../../style/UTILS';

import * as Animatable from 'react-native-animatable';
import {useStoreState} from '../../state/store';
import {BackgroundNormal} from './image';
import {BackgroundLegendary} from './legendary';
import {BackgroundEpic} from './epic';

const GradientBackgroundNormal: React.FC<GradientBackgroundType> = ({
  children,
  style,
  rarity = 'normal',
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
    <Fragment>
      {rarity == 'normal' ? (
        <BackgroundNormal />
      ) : rarity == 'legendary' ? (
        <BackgroundLegendary />
      ) : (
        <BackgroundEpic />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        scrollEnabled={true}
        keyboardShouldPersistTaps={'handled'}
        onKeyboardDidShow={() => setpaddingBottom(normalize(100))}
        onKeyboardDidHide={() => setpaddingBottom(normalize(0))}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={[style, {height: '100%', width: '100%'}]}
          contentContainerStyle={{
            height: '100%',
            paddingBottom,
          }}>
          {children}
        </ScrollView>
        {show && (
          <Animatable.View style={styles.messageContainer} ref={messageRef}>
            <Animatable.Text style={styles.messageText}>{msg}</Animatable.Text>
          </Animatable.View>
        )}
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default GradientBackgroundNormal;
