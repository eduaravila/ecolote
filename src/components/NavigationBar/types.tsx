import {ImageSourcePropType} from 'react-native';

export interface NavigationImageType {
  style?: {[t: string]: any};
}

export interface NavigationBarItemType {
  active?: boolean;
  label: string;
  itemRef?:any
}
