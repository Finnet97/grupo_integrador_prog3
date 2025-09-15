import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="site-header">
      <nav>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
          <li><Link to="/searchresults">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
