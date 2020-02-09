import {ReactNode} from 'react';

export interface Subtitle1Types {
  children: ReactNode;
  style?: {[t: string]: any};
  onPress?: () => void;
}
