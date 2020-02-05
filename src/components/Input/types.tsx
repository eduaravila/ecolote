import {TextInput} from 'react-native';
import {RefObject} from 'react';

export interface InputCustomType {
  borderColor?: string;
  fillColor?: string;
  ref?: any;
  errorMsg?: string;
  block?: boolean;
  error?: boolean;
  textColor?: string;
  style?: {[t: string]: any};
  onChangeText?: (e: string) => void;
  placeholder: string;
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
