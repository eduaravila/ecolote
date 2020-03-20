import React, {useRef, useState, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TouchableScale from 'react-native-touchable-scale';
import nanoid from 'nanoid/non-secure';
import {styles} from './styles';
import {bodyTypes} from './types';
import {H6Title} from '../../../../components/H6Title/H6Title';
import {
  HEY_COLOR,
  HEY_COLOR_DARK,
  PRIMARY_COLOR,
  PRIMARY_LIGHT_COLOR,
  INPUT_BORDER_COLOR,
  INPUT_BORDER_COLOR_DARK,
} from '../../../../style/COLOR';
import {normalize} from '../../../../style/UTILS';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';
import {fix_limit} from '../../../../utils/random';
import {Focus} from '../../../../components/Focus/Focus';
import {useStoreActions} from '../../../../state/store';

let timeout: any;

let _lastScale = 1;
const Body: React.FC<bodyTypes> = ({componentId, cameraRef = useRef(null)}) => {
  const [xFocus, setxFocus] = useState(0);
  const [cameraWidth, setCameraWidth] = useState(0);
  const [cameraHeight, setCameraHeight] = useState(0);
  const [capturing, setCapturing] = useState(false);

  const [showFocus, setshowFocus] = useState(false);
  const {addPhoto} = useStoreActions(state => state.photos);

  const [yFocus, setyFocus] = useState(0);
  const _pinchScale = new Animated.Value(1);
  const [zoom, setZoom] = useState(0);
  const _onPinchGestureEvent = Animated.event(
    [{nativeEvent: {scale: _pinchScale}}],
    {useNativeDriver: true},
  );

  const takePicture = async () => {
    if (cameraRef) {
      setCapturing(true);

      const options = {quality: 0.5, base64: true, pauseAfterCapture: true};
      const data = await cameraRef.current.takePictureAsync(options);
      addPhoto({name: nanoid(), uri: data.uri});
      cameraRef.current.resumePreview();
      setCapturing(false);
    }
  };

  const _focusTiming = () => {
    setshowFocus(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setshowFocus(false);
    }, 3000);
  };
  const _onPinchHandlerStateChange = (event: any) => {
    if (event.nativeEvent.numberOfPointers > 1) {
      _lastScale *= event.nativeEvent.scale;
      setZoom(_lastScale * 0.1);
      _pinchScale.setValue(1);
    } else if (
      event.nativeEvent.numberOfPointers == 1 &&
      event.nativeEvent.oldState != 0
    ) {
      setxFocus(event.nativeEvent.focalX - normalize(40));
      setyFocus(event.nativeEvent.focalY - normalize(40));
      _focusTiming();
    }
  };

  return (
    <View style={styles.container}>
      <PinchGestureHandler
        onGestureEvent={_onPinchGestureEvent}
        onHandlerStateChange={_onPinchHandlerStateChange}>
        <Animated.View
          collapsable={false}
          onLayout={(event: any) => {
            var {x, y, width, height} = event.nativeEvent.layout;
            setCameraWidth(width);
            setCameraHeight(height);
          }}>
          <Focus x={xFocus} y={yFocus} show={showFocus} />
          <RNCamera
            autoFocusPointOfInterest={{
              x: cameraWidth ? fix_limit(xFocus, 1, 0, cameraWidth) : 0.5,
              y: cameraHeight ? fix_limit(yFocus, 1, 0, cameraHeight) : 0.5,
            }}
            zoom={fix_limit(zoom, 1, 0, 1)}
            ref={cameraRef}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permiso para utilizar tu camara',
              message: 'Necesitamos tu permiso para utilizar tu camara',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
          />
        </Animated.View>
      </PinchGestureHandler>
      <View style={styles.controllers}>
        <H6Title style={styles.description}>
          Captura tu experiencia. Producto nuevo, alternativa, nueva idea
        </H6Title>
        <TouchableScale
          tension={100}
          friction={10}
          onPress={capturing ? () => {} : () => takePicture()}>
          <View
            style={{
              backgroundColor: capturing
                ? INPUT_BORDER_COLOR
                : PRIMARY_LIGHT_COLOR,
              width: normalize(70),
              height: normalize(70),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: normalize(50),
            }}>
            <View
              style={{
                backgroundColor: capturing
                  ? INPUT_BORDER_COLOR_DARK
                  : PRIMARY_COLOR,
                width: normalize(55),
                height: normalize(55),
                borderRadius: normalize(50),
              }}></View>
          </View>
        </TouchableScale>
      </View>
    </View>
  );
};

export default Body;
