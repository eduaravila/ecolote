import {Action, action} from 'easy-peasy';

interface BottomNavigationSetVisityType {
  show: boolean;
}

export interface BottomNavigationType {
  show: boolean;
  BottomNavigationSetVisity: Action<
    BottomNavigationType,
    BottomNavigationSetVisityType
  >;
}

export const BottomNavigationModel: BottomNavigationType = {
  show: false,
  BottomNavigationSetVisity: action((state, pl) => {
    state.show = pl.show;
  }),
};
