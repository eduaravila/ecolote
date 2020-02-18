declare module 'react-hook-form';
declare module 'react-native-orientation';
declare module 'react-native-dotenv';
declare module 'react-native-tab-view-viewpager-adapter';
declare module 'react-native-navigation-bar-color';
declare module 'react-native-shadow';
declare module 'react-native-touchable-scale';
declare type VoidFunction = any;
declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
