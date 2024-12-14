import React, { useState } from "react";

function MovieSearchBar({ getData }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a movie..."
        className="search-bar__input"
      />
      <button
        onClick={() => getData(searchValue)}
        className="search-bar__button"
      >
        Search
      </button>
    </div>
  );
}

export default MovieSearchBar;
