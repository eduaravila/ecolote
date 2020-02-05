import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale: number = SCREEN_WIDTH / 320;

export function normalize(size: number): number {
  const newSize: number = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
export function getColumn(porcentage: number) {
  let columns = 5;
  let separation = 10;
  let column = SCREEN_WIDTH / columns - separation;
  return column * porcentage;
}
