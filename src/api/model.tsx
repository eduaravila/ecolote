import {Action, action} from 'easy-peasy';

interface setErrorType {
  msg: string;
  error: boolean;
}

export interface errorModelType {
  msg: string;
  error: boolean;
  setStatus: Action<errorModelType, setErrorType>;
}

export const errorModel: errorModelType = {
  msg: '',
  error: false,
  setStatus: action((state, pl) => {
    state.msg = pl.msg;
    state.error = pl.error;
  }),
};
