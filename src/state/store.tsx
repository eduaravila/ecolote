import {createStore, createTypedHooks} from 'easy-peasy';

import {errorModel, errorModelType} from '../api/model';
import {
  BottomNavigationModel,
  BottomNavigationType,
} from '../features/Dashboard/reducers';

interface StoreModel {
  networkStatus: errorModelType;
  BottomNavigation: BottomNavigationType;
}
const typedHooks = createTypedHooks<StoreModel>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const storeModel: StoreModel = {
  networkStatus: errorModel,
  BottomNavigation: BottomNavigationModel,
};

const store = createStore(storeModel); // 👈 create our store

export default store;
