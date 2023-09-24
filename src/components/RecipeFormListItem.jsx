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
  return (
    <li className="RecipeFormListItem">
      {editItem ? (
        <div>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button type="button" className="btn" onClick={handleUpdateItem}>
            <BsCheck />
          </button>
        </div>
      ) : (
        <div className="RecipeFormListItem__container">
          <div>{item.text}</div>
          <div>
            <MdModeEdit onClick={handleEditItem} />
            <GrFormClose onClick={handleDeleteItem} />
          </div>
        </div>
      )}
    </li>
  );
};

export default RecipeFormListItem;
