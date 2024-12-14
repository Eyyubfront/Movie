import { useState } from "react";
import Container from "./components/MovieSearch/MovieSearch";
import Header from "./components/Header/Header";
import "./index.css";
import Basket from "./components/MovieBasket/MovieBasket";
import MovieBasket from "./components/MovieBasket/MovieBasket";
import MovieSearch from "./components/MovieSearch/MovieSearch";

function App() {
  const [basket, setBasket] = useState([]);
  const [basketActive, setBasketActive] = useState(false);

  return (
    <>
      <Header />
      {basketActive ? (
        <MovieBasket
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      ) : (
        <MovieSearch
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      )}
    </>
  );
}

export default App;
