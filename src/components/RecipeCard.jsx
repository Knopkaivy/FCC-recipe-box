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
  const ingredientsList = currentItem.ingredients.map((ing) => {
    return <li key={ing.id}>{ing.text}</li>;
  });
  const directionsList = currentItem.directions.map((direction) => {
    return <li key={direction.id}>{direction.text}</li>;
  });
  const handleRemoveRecipe = () => {
    removeRecipe(currentItem);
    setCurrentId(null);
  };
  return (
    <div className="RecipeCard">
      <h2 className="RecipeCard__header">{currentItem.name}</h2>
      <h3>Ingredients:</h3>
      <ul>{ingredientsList}</ul>
      <h3>Directions:</h3>
      <ol>{directionsList}</ol>
      <div className="RecipeCard__buttonContainer">
        <button
          className="RecipeCard__button RecipeCard__button--blue btn"
          onClick={() => setEditModeOn(true)}
        >
          Edit
        </button>
        <button
          className="RecipeCard__button RecipeCard__button--red btn"
          onClick={handleRemoveRecipe}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
