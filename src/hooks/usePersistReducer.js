import { useCallback, useReducer } from 'react';
import { useLocalStorage } from 'react-use';
import recipesReducer, { initialState } from '../reducers/recipesReducer';

const LOCAL_STORAGE_KEY = 'RECIPES';

export const usePersistReducer = () => {
  const [savedState, saveState] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    initialState
  );

  const reducerLocalStorage = useCallback(
    (state, action) => {
      const newState = recipesReducer(state, action);
      saveState(newState);
      return newState;
    },
    [saveState]
  );

  return useReducer(reducerLocalStorage, savedState);
};
