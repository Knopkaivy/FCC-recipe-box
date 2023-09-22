export const initialState = {
  recipes: [
    {
      name: 'Chicken',
      id: 1,
      ingredients: ['chicken', 'seasoning', 'broccoli'],
      directions: ['Step 1', 'Step 2', 'Step 3'],
    },
    {
      name: 'Steak',
      id: 2,
      ingredients: ['rib eye steak', 'butter', 'garlic'],
      directions: ['Step 1', 'Step 2', 'Step 3'],
    },
    {
      name: 'Cake',
      id: 3,
      ingredients: ['flour', 'cocoa powder', 'egg', 'sugar'],
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
