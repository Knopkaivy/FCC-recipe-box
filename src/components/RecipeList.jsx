import React from 'react';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const items = ['one', 'two', 'three'];
  const recipes = items.map((item, i) => {
    return (
      <li key={i} className="RecipeList__item">
        {item}
      </li>
    );
  });
  return (
    <aside className="RecipeList">
      <ul>{recipes}</ul>
    </aside>
  );
};

export default RecipeList;
