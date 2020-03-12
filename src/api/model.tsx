import {Action, action} from 'easy-peasy';

interface setErrorType {
  msg: string;
  show: boolean;
}

interface setTokenType {
  token: string;
}

export interface errorModelType {
  msg: string;
  show: boolean;
  setStatus: Action<errorModelType, setErrorType>;
}

export interface tokenModelType {
  token: string;
  mediaToken: string;
  setToken: Action<tokenModelType, setTokenType>;
  setMediaToken: Action<tokenModelType, setTokenType>;
}

export const tokenModel: tokenModelType = {
  token: '',
  mediaToken: '',
  setToken: action((state, pl) => {
    console.log(pl);
    state.token = pl.token;
  }),
  setMediaToken: action((state, pl) => {
    console.log(pl);
    state.mediaToken = pl.token;
  }),
};

export const errorModel: errorModelType = {
  msg: '',
  show: false,
  setStatus: action((state, pl) => {
    state.msg = pl.msg;
    state.show = pl.show;
  }),
};
