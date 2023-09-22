import React from 'react';

import { useRecipe } from '../contexts/RecipesContext';
import RecipeListItem from './RecipeListItem';
import '../styles/RecipeList.css';

const RecipeList = ({ setCurrentId, setEditModeOn }) => {
  const { recipes } = useRecipe();

  const handleAddRecipe = () => {
    setCurrentId(null);
  };

  const recipesList = recipes.map((item) => {
    return (
      <RecipeListItem
        item={item}
        key={item.id}
        setCurrentId={setCurrentId}
        className="RecipeList__item"
      />
    );
  });
  return (
    <aside className="RecipeList">
      <ul className="RecipeList__ul">{recipesList}</ul>
      <button onClick={handleAddRecipe}>Add</button>
    </aside>
  );
};

export default RecipeList;
