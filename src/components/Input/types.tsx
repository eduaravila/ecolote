import {
  TextInputProps,
} from 'react-native';

export interface InputCustomType {
  borderColor?: string;
  fillColor?: string;
  block?: boolean;
  textColor?: string;
  style?: {[t: string]: any};
  onChange: (e: TextInputProps) => void;
  placeholder: string;
  value: string;
  placeHolderColor?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
}
