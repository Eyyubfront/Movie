import React from "react";
import { Link } from "react-router-dom";
import film from "../../assets/film.png"
import BurgerMenu from "../Burgermenu/Burgermenu";
function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
      <Link  to="/">
      <img className="logo" src={film} alt="" />
        </Link>
        
      </div>

      <div className="header_nav">
        <Link className="links" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="links" to="/explore">
          <h3>Explore</h3>
        </Link>
        <Link className="links" to="/contact">
          <h3>Contact</h3>
        </Link>
      </div>
      <BurgerMenu/>
    </header>
  );
}

export default Header;
