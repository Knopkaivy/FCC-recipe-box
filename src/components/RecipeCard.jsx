import React, { useEffect, useState } from 'react';
import { useRecipe } from '../contexts/RecipesContext';
import '../styles/RecipeCard.css';

const RecipeCard = ({ currentId, setCurrentId, setEditModeOn }) => {
  const { recipes, removeRecipe } = useRecipe();
  const [currentItem, setCurrentItem] = useState(
    recipes.find((item) => item.id === currentId)
  );
  useEffect(() => {
    setCurrentItem(recipes.find((item) => item.id === currentId));
  }, [currentId]);
  const ingredientsList = currentItem.ingredients.map((ing, i) => {
    return <li key={i}>{ing}</li>;
  });
  const directionsList = currentItem.directions.map((direction, i) => {
    return <li key={i}>{direction}</li>;
  });
  const handleRemoveRecipe = () => {
    removeRecipe(currentItem);
    setCurrentId(null);
  };
  return (
    <div>
      <h2>{currentItem.name}</h2>
      <h3>Ingredients:</h3>
      <ul>{ingredientsList}</ul>
      <h3>Directions:</h3>
      <ol>{directionsList}</ol>
      <button onClick={() => setEditModeOn(true)}>Edit</button>
      <button onClick={handleRemoveRecipe}>Delete</button>
    </div>
  );
};

export default RecipeCard;
