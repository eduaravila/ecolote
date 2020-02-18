import {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

export interface StateContainerType {
  icon?: ImageSourcePropType;
  children?: ReactNode;
  iconText?: String;
  style?: {[t: string]: any};
  styleJr?: {[t: string]: any};
  contentStyle?: {[t: string]: any};
  borderStyle?: {[t: string]: any};
  logoStyle?: {[t: string]: any};
  logoContainerStyle?: {[t: string]: any};
}
