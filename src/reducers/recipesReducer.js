export const initialState = {
  recipes: [
    {
      name: 'Recipe one',
      id: 1,
      ingredients: ['ingredient one', 'ingredient 2', 'ingredinet 3'],
      directions: ['Step 1', 'Step 2', 'Step 3'],
    },
  ],
};

const recipesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      console.log('adding recipe to list');
      return {
        ...state,
        recipes: [...state.recipes, payload.newRecipe],
      };
    case 'REMOVE':
      console.log('removing from list');
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== payload.recipe.id),
      };
    case 'UPDATE':
      console.log('updating recipe in the list');
      return {
        ...state,
        recipes: state.recipes.map((item) => {
          if (item.id === payload.recipe.id) return payload.recipe;
          return item;
        }),
      };
    default:
      throw new Error(`No case for type ${type} found in recipesReducer.`);
  }
};

export default recipesReducer;
