import { createContext, useContext, useReducer } from 'react';
import recipesReducer, { initialState } from '../reducers/recipesReducer';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);
  const addRecipe = (newRecipe) => {
    dispatch({
      type: 'ADD',
      payload: {
        newRecipe,
      },
    });
  };
  const removeRecipe = (recipe) => {
    dispatch({
      type: 'REMOVE',
      payload: {
        recipe,
      },
    });
  };
  const updateRecipe = (recipe) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        recipe,
      },
    });
  };

  const value = {
    recipes: state.recipes,
    addRecipe,
    removeRecipe,
    updateRecipe,
  };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};

export const useRecipe = () => {
  return useContext(RecipesContext);
};
