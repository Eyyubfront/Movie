import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

function SelectedMoviesList({ 
  list, 
  setList, 
  setBasketActive, 
  basket, 
  setBasket }) {
  const [listName, setListName] = useState("");

  const removeFromList = (id) => {
    const updatedList = list.filter((item, index) => index !== id);
    setList(updatedList);
  };

  const addToBasket = () => {
    setBasket({
      ...basket,
      title: listName,
      orders: [...list], 
    });
    setList([]); 
    setListName(""); 
  };

  return (
    <div className="selected-movies-list">
      <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="list-name-input"
      />
      {list.map((item, index) => (
        <div key={index} className="movie-item">
          <p>{item.title}</p>
          <button onClick={() => removeFromList(index)} className="remove-btn">
            ✖
          </button>
        </div>
      ))}
      <div className="buttons-container">
        <button
          onClick={addToBasket}
          disabled={listName.length === 0 || list.length === 0}
          className="save-btn"
        >
          <FaSave />
        </button>
        <button onClick={() => setBasketActive(true)} className="go-to-basket-btn">
          <FaBasketShopping />
        </button>
      </div>
    </div>
  );
}

export default SelectedMoviesList;
