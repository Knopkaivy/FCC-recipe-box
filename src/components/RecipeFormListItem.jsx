import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { MdModeEdit } from 'react-icons/md';
import '../styles/RecipeFormListItem.css';

const RecipeFormListItem = ({ item, updateItem, deleteItem }) => {
  const [editItem, setEditItem] = useState(false);
  const [val, setVal] = useState(item.text);
  const handleEditItem = () => {
    setEditItem(true);
  };
  const handleDeleteItem = () => {
    if (window.confirm('Delete item from the list?')) {
      deleteItem(item.id);
    }
  };
  const handleUpdateItem = () => {
    updateItem(item.id, val);
    setEditItem(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleUpdateItem();
    }
  };
  return (
    <li className="RecipeFormListItem">
      {editItem ? (
        <div>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            className="input"
          />
          <button
            type="button"
            className="btn btn--white"
            onClick={handleUpdateItem}
          >
            <BsCheck />
          </button>
        </div>
      ) : (
        <div className="RecipeFormListItem__container">
          <div className="RecipeFormListItem__text">{item.text}</div>
          <div className="RecipeFormListItem__btnContainer">
            <button className="btn btn--blue" onClick={handleEditItem}>
              <MdModeEdit />
            </button>
            <button className="btn btn--red" onClick={handleDeleteItem}>
              <GrFormClose />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default RecipeFormListItem;
