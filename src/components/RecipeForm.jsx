import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus } from 'react-icons/ai';
import { useRecipe } from '../contexts/RecipesContext';
import '../styles/RecipeForm.css';

const RecipeForm = () => {
  const ingredientRef = useRef(null);
  const directionRef = useRef(null);
  const { recipes, addRecipe, updateRecipe } = useRecipe();

  const [name, setName] = useState('');
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [currentDirection, setCurrentDirection] = useState('');
  const [directionsArr, setDirectionsArr] = useState([]);

  const ingredientsList = ingredientsArr.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  const directionsList = directionsArr.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  const handleAddIngredient = () => {
    if (currentIngredient !== '') {
      setIngredientsArr([...ingredientsArr, currentIngredient]);
      setCurrentIngredient('');
    }
    ingredientRef.current.focus();
  };
  const handleAddDirection = () => {
    if (currentDirection !== '') {
      setDirectionsArr([...directionsArr, currentDirection]);
      setCurrentDirection('');
    }
    directionRef.current.focus();
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target.id === 'ingredients') {
        handleAddIngredient();
      } else if (event.target.id === 'directions') {
        handleAddDirection();
      } else {
        return;
      }
    }
    return;
  };

  const resetFormData = () => {
    setName('');
    setCurrentIngredient('');
    setIngredientsArr([]);
    setCurrentDirection('');
    setDirectionsArr([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      id: uuidv4(),
      ingredients: ingredientsArr,
      directions: directionsArr,
    };
    addRecipe(newRecipe);
    alert(`${name} recipe card has been added to the list`);
    resetFormData();
  };

  return (
    <form className="RecipeForm" onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="RecipeForm__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients</label>

      {ingredientsArr.length > 0 && (
        <ul className="RecipeForm__ingredientsList">{ingredientsList}</ul>
      )}
      <div className="RecipeForm__inputRow">
        <input
          type="text"
          id="ingredients"
          className="RecipeForm__input"
          ref={ingredientRef}
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="RecipeForm__button"
          onClick={handleAddIngredient}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <label htmlFor="directions">Directions</label>
      {directionsArr.length > 0 && (
        <ol className="RecipeForm__directionsList">{directionsList}</ol>
      )}
      <div className="RecipeForm__inputRow">
        <input
          type="text"
          id="directions"
          className="RecipeForm__input"
          ref={directionRef}
          value={currentDirection}
          onChange={(e) => setCurrentDirection(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="RecipeForm__button"
          onClick={handleAddDirection}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <input type="submit" className="RecipeForm__button" value="Create" />
    </form>
  );
};

export default RecipeForm;
