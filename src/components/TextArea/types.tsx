import {TextInput} from 'react-native';
import {RefObject} from 'react';

export interface TextAreaType {
  multiline?: boolean;
  numberOfLines?: number;
  borderColor?: string;
  fillColor?: string;
  ref?: (e: any) => any;
  secureTextEntry?: boolean;
  errorMsg?: string;
  block?: boolean;
  error?: boolean;
  textColor?: string;
  style?: {[t: string]: any};
  onChangeText?: (e: string) => void;
  placeholder: string;
  placeHolderColor?: string;
  returnKeyType?: 'done' | 'next' | undefined;
  onSubmitEditing: () => void;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | undefined;
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
