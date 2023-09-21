import React from 'react';

import { useRecipe } from '../contexts/RecipesContext';
import RecipeListItem from './RecipeListItem';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const { recipes } = useRecipe();
  const recipesList = recipes.map((item) => {
    return (
      <RecipeListItem item={item} key={item.id} className="RecipeList__item" />
    );
  });
  return (
    <aside className="RecipeList">
      <ul className="RecipeList__ul">{recipesList}</ul>
    </aside>
  );
};

export default RecipeList;
