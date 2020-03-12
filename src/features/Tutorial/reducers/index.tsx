import {Action, action} from 'easy-peasy';

interface TutorialSetDoneType {
  show: boolean;
}

export interface TutorialModelType {
  show: boolean;
  TutorialSetDone: Action<TutorialModelType, TutorialSetDoneType>;
}

export const TutorialModel: TutorialModelType = {
  show: true,
  TutorialSetDone: action((state, pl) => {
    state.show = pl.show;
  }),
};
