import {Action, action} from 'easy-peasy';

interface setConectedType {
  online: boolean;
}
interface setRefetchType {
  refetch: boolean;
}

export interface networkStatusModelType {
  online: boolean;
  refetch: boolean;
  setOnline: Action<networkStatusModelType, setConectedType>;
  setRefetch: Action<networkStatusModelType, setRefetchType>;
}

export const networkStatusModel: networkStatusModelType = {
  online: true,
  refetch: true,
  setOnline: action((state, pl) => {
    if (!pl.online) {
      state.refetch = false;
    }
    state.online = pl.online;
  }),
  setRefetch: action((state, pl) => {
    state.refetch = pl.refetch;
  }),
};
