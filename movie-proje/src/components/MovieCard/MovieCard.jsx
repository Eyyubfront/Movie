import React from "react";

function MovieCard({ movie, setList, list }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="movie-card__image"
      />
      <div className="movie-card__details">
        <div className="movie-card__meta">
          <span className="release-year">{movie.release_date.slice(0, 4)}</span>
          <p className="movie-title">{movie.title}</p>
        </div>
        <button
          className="movie-card__button"
          onClick={() => {
            setList((prev) => {
              if (!prev.some((item) => item.id === movie.id)) {
                return [...prev, movie];
              }
              alert("Already in the list");
              return prev;
            });
          }}
        >
          Add to List
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
