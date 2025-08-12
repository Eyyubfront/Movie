import React, { useState } from "react";
import MovieBasket from "../../components/MovieBasket/MovieBasket";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { Link } from 'react-router-dom';  
import { FaHome } from 'react-icons/fa';  
const Explore = () => {
  const [basket, setBasket] = useState([]);
  const [basketActive, setBasketActive] = useState(false);

  return (
    <div>
        <h2 className='contact_name'>Explore</h2>
        <div className='top__linksabout'>
        <FaHome style={{ marginRight: '8px' }} />
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
          Home
        </Link>
        <h4>/ Explore</h4>
      </div>
      <div className='page_description'>
        <h4>Discover You Next Movie!</h4>
        <p className='info_text'>Explore an extensive collectionn of movies and shows for every mood.</p>
      </div>
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
    </div>
  );
};

export default Explore;
