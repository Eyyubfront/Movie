import React from "react";
import { Link } from "react-router-dom";

function MovieBasket({ basket, setBasketActive }) {
  return (
    <div className="basket-container">
      <div className="basket-content">
        <h1>Your Movie Basket</h1>
        <div className="movie-list">
          {basket.orders && basket.orders.length > 0 ? (
            <>
              <h2>List Name: {basket.title}</h2>
              <div className="movies">
                {basket.orders.map((item, index) => (
                  <div key={index} className="movie-card">
                    <Link
                      target="_blank"
                      to={`https://www.themoviedb.org/movie/${item.id}`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                        alt={item.title}
                        className="basket_img"
                      />
                    </Link>
                    <div className="movie-details">
                      <p>{item.title}</p>
                      <span>Release Year: {item.release_date.slice(0, 4)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-basket">Your basket is empty</div>
          )}
        </div>
        <button className="back-button" onClick={() => setBasketActive(false)}>
          Back to Movies
        </button>
      </div>
    </div>
  );
}

export default MovieBasket;
