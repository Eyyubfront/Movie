import React from "react";
import { Link } from "react-router-dom";
import film from "../../assets/film.png";
import git from "../../assets/contact/git.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="footer_logo">
          <Link to="/">
            <img className="logo" src={film} alt="" />
          </Link>
        </div>
        <div className="footer_navlink">
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
      </div>
      <div className="footer_riht">
        <h2>Contact With us</h2>
        <div className="contact_me">
          <a href="mailto:eyyubbayramov811@gmail.com">
            <svg
              className="contact_ion"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 31.291 31.291"
            >
              <g>
                <polygon points="30.271,5.643 1.018,5.643 15.645,19.671" />
                <polygon points="15.645,22.539 0,7.536 0,25.648 31.291,25.648 31.291,7.536" />
              </g>
            </svg>
          </a>
          <a href="https://github.com/Eyyubfront?tab=repositories">
            <img style={{ width: "66px",height:"42px" }} src={git} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
