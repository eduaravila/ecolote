import {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

export interface ArenaType {
  icon: ImageSourcePropType;
  style?: {[t: string]: any};
  iconStyle?: {[t: string]: any};
}
