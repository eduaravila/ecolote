import {Navigation} from 'react-native-navigation';
import {PRIMARY_DARK_COLOR} from '../../style/COLOR';

export const pushStack = (componentId: string, name: string) => {
  Navigation.push(componentId, {
    component: {
      name,
    },
  });
};

export const pushStackWithProps = (
  componentId: string,
  name: string,
  props = {},
) => {
  Navigation.push(componentId, {
    component: {
      name,
      passProps: {
        ...props,
      },
    },
  });
};

export const popStack = (componentId: string) => {
  Navigation.pop(componentId);
};
