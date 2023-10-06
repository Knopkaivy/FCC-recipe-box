import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus } from 'react-icons/ai';
import { useRecipe } from '../contexts/RecipesContext';
import RecipeFormListItem from './RecipeFormListItem';
import '../styles/RecipeForm.css';

const RecipeForm = ({ currentId, editModeOn, setCurrentId, setEditModeOn }) => {
  const ingredientRef = useRef(null);
  const directionRef = useRef(null);
  const { recipes, addRecipe, updateRecipe } = useRecipe();

  const [currentItem, setCurrentItem] = useState(
    recipes.find((item) => item.id === currentId)
  );

  const [name, setName] = useState('');
  const [id, setId] = useState(uuidv4());
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [currentDirection, setCurrentDirection] = useState('');
  const [directionsArr, setDirectionsArr] = useState([]);

  useEffect(() => {
    if (editModeOn) {
      setName(currentItem.name);
      setId(currentItem.id);
      setIngredientsArr(currentItem.ingredients);
      setDirectionsArr(currentItem.directions);
    }
  }, [editModeOn]);

  const handleAddIngredient = () => {
    if (currentIngredient !== '') {
      setIngredientsArr([
        ...ingredientsArr,
        { text: currentIngredient, id: uuidv4() },
      ]);
      setCurrentIngredient('');
    }
    ingredientRef.current.focus();
  };

  const updateIngredient = (id, newText) => {
    const newArr = ingredientsArr.map((item) => {
      if (item.id === id) {
        item.text = newText;
      }
      return item;
    });
    setIngredientsArr(newArr);
  };

  const deleteIngredient = (id) => {
    const newArr = ingredientsArr.filter((item) => item.id !== id);
    setIngredientsArr(newArr);
  };

  const handleAddDirection = () => {
    if (currentDirection !== '') {
      setDirectionsArr([
        ...directionsArr,
        { text: currentDirection, id: uuidv4() },
      ]);
      setCurrentDirection('');
    }
    directionRef.current.focus();
  };

  const updateDirection = (id, newText) => {
    const newArr = directionsArr.map((item) => {
      if (item.id === id) {
        item.text = newText;
      }
      return item;
    });
    setDirectionsArr(newArr);
  };

  const deleteDirection = (id) => {
    const newArr = directionsArr.filter((item) => item.id !== id);
    setDirectionsArr(newArr);
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
      id,
      ingredients: ingredientsArr,
      directions: directionsArr,
    };
    if (recipes.some((item) => item.id === id)) {
      updateRecipe(newRecipe);
      setEditModeOn(false);
      setCurrentItem(newRecipe);
    } else {
      addRecipe(newRecipe);
      setCurrentId(id);
      resetFormData();
    }
  };

  const ingredientsList = ingredientsArr.map((item) => {
    return (
      <RecipeFormListItem
        key={item.id}
        item={item}
        updateItem={updateIngredient}
        deleteItem={deleteIngredient}
      />
    );
  });
  const directionsList = directionsArr.map((item) => {
    return (
      <RecipeFormListItem
        key={item.id}
        item={item}
        updateItem={updateDirection}
        deleteItem={deleteDirection}
      />
    );
  });

  return (
    <form className="RecipeForm" onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="RecipeForm__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
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
          className="btn btn--red"
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
          className="btn btn--red"
          onClick={handleAddDirection}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <input type="submit" className="btn btn--red" value="Submit" />
    </form>
  );
};

export default RecipeForm;
