import {ReactNode} from 'react';

export interface CaptionTypes {
  style?: {[t: string]: any};
  children?: ReactNode;
  onPress?: () => void;
}
