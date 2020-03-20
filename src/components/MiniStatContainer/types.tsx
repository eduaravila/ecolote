import {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

export interface MiniStateContainerType {
  icon: ImageSourcePropType;
  style?: {[t: string]: any};
  logoStyle?: {[t: string]: any};
  onPress: () => void;
}
