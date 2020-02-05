export interface MiniButtonType {
  borderColor?: string;
  fillColor?: string;
  block?: boolean;
  textColor?: string;
  iconColor?: string;
  iconName?: string;
  iconSize?: number;
  iconStyle?: {[t: string]: any};
  style?: {[t: string]: any};
  onPress: () => void;
}

export interface MiniButtonIconType {
  color?: string;
  size?: number;
  name?: string;
  style?: {[t: string]: any};
}
