export interface ButtonCustomType {
  borderColor?: string;
  fillColor?: string;
  block?: boolean;
  textColor?: string;
  iconColor?: string;
  iconName?: string;
  iconSize?: number;
  iconStyle?: {[t: string]: any};
  style?: {[t: string]: any};
  onPress?: () => void;
  disabled?: boolean;
}

export interface ButtonIconType {
  color?: string;
  size?: number;
  name?: string;
  style?: {[t: string]: any};
}
