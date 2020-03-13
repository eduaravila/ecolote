import {ReactNode} from 'react';

export interface ColorButtomType {
  children?: ReactNode;
  onPress?: () => void;
  colorFirst?: string;
  colorSecond?: string;
  cancel?: boolean;
  style?: {[t: string]: any};
  topColor?: string;
  middleColor?: string;
  disabled?: boolean;
  loading?: boolean;
  bottomColor?: string;
}
