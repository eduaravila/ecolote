import {createStore, createTypedHooks, persist} from 'easy-peasy';
import {persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import {
  errorModel,
  errorModelType,
  tokenModel,
  tokenModelType,
} from '../api/model';
import {
  BottomNavigationModel,
  BottomNavigationType,
} from '../features/Dashboard/reducers';

import {TutorialModel, TutorialModelType} from '../features/Tutorial/reducers';

interface StoreModel {
  networkStatus: errorModelType;
  BottomNavigation: BottomNavigationType;
  credentials: tokenModelType;
  tutorial: TutorialModelType;
}
const typedHooks = createTypedHooks<StoreModel>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const storeModel: StoreModel = {
  networkStatus: errorModel,
  BottomNavigation: BottomNavigationModel,
  credentials: tokenModel,
  tutorial: TutorialModel,
};

const store = createStore(storeModel, {
  reducerEnhancer: reducer =>
    persistReducer(
      {
        timeout: 0, // The code base checks for falsy, so 0 disables
        key: 'easypeasystate',
        storage,
        blacklist: ['networkStatus', 'BottomNavigation'],
      },
      reducer,
    ),
}); // 👈 create our store

export default store;
