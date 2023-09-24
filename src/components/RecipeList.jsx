import React from 'react';

import { useRecipe } from '../contexts/RecipesContext';
import RecipeListItem from './RecipeListItem';
import '../styles/RecipeList.css';

const RecipeList = ({ currentId, setCurrentId, setEditModeOn }) => {
  const { recipes } = useRecipe();

  const handleAddRecipe = () => {
    setCurrentId(null);
  };

  const recipesList = recipes.map((item) => {
    return (
      <RecipeListItem
        item={item}
        key={item.id}
        active={item.id === currentId}
        setCurrentId={setCurrentId}
        setEditModeOn={setEditModeOn}
        className="RecipeList__item"
      />
    );
  });
  return (
    <aside className="RecipeList">
      <button className="RecipeList__button btn" onClick={handleAddRecipe}>
        Add
      </button>
      <ul className="RecipeList__ul">{recipesList}</ul>
    </aside>
  );
};

export default RecipeList;
