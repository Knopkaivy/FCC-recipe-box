import React from 'react';
import { useRecipe } from '../contexts/RecipesContext';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const { recipes } = useRecipe();
  const recipesList = recipes.map((item, i) => {
    return (
      <li key={item.id} className="RecipeList__item">
        {item.name}
      </li>
    );
  });
  return (
    <aside className="RecipeList">
      <ul>{recipesList}</ul>
    </aside>
  );
};

export default RecipeList;
