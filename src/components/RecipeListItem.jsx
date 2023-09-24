import React from 'react';

import '../styles/RecipeListItem.css';

const RecipeListItem = ({ active, item, setCurrentId, setEditModeOn }) => {
  const handleSelectItem = () => {
    setEditModeOn(false);
    setCurrentId(item.id);
  };
  return (
    <li
      className={`RecipeListItem ${active && 'RecipeListItem--active'}`}
      onClick={handleSelectItem}
    >
      {item.name}
    </li>
  );
};

export default RecipeListItem;
