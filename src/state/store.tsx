import {createStore, createTypedHooks} from 'easy-peasy';

import {errorModel, errorModelType} from '../api/model';

interface StoreModel {
  networkStatus: errorModelType;
}
const typedHooks = createTypedHooks<StoreModel>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const storeModel: StoreModel = {
  networkStatus: errorModel,
};

const store = createStore(storeModel); // 👈 create our store

export default store;
