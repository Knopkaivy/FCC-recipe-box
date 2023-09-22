import React from 'react';

import '../styles/RecipeListItem.css';

const RecipeListItem = ({ item, setCurrentId }) => {
  return (
    <li className="RecipeListItem" onClick={() => setCurrentId(item.id)}>
      {item.name}
    </li>
  );
};

export default RecipeListItem;
