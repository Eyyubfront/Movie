import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import SelectedMoviesList from "../SelectedMoviesList/SelectedMoviesList";
import MovieSearchBar from "../MovieSearchBar/MovieSearchBar";

function MovieSearch({ setBasketActive, basket, setBasket }) {
  const [searchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);

  const getSearch = (search) => {
    setSearchParams(search);
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie`, {
        headers: {
          Authorization: "Bearer YOUR_API_KEY",
          Accept: "application/json",
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="movie-search-container">
        <div className="movie-search-right">
        <SelectedMoviesList
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
      <div className="movie-search-left">
        <MovieSearchBar getData={getSearch} />
        <div className="movie-cards">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchParams.toLowerCase())
            )
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} setList={setList} list={list} />
            ))}
        </div>
      </div>
    
    </div>
  );
}

export default MovieSearch;
