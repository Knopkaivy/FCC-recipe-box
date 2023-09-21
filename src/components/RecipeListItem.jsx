import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import '../styles/RecipeListItem.css';

const RecipeListItem = ({ item }) => {
  return (
    <li className="RecipeListItem">
      <div className="RecipeListItem__name">{item.name}</div>
      <AiOutlineEdit />
      <MdOutlineDelete />
    </li>
  );
};

export default RecipeListItem;
