import {Action, action} from 'easy-peasy';

interface setErrorType {
  msg: string;
  show: boolean;
}

export interface errorModelType {
  msg: string;
  show: boolean;
  setStatus: Action<errorModelType, setErrorType>;
}

export const errorModel: errorModelType = {
  msg: '',
  show: false,
  setStatus: action((state, pl) => {
    state.msg = pl.msg;
    state.show = pl.show;
  }),
};
