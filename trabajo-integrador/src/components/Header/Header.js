import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img src="/imagenes/BeWatch_logo.png" alt="" className="logo" />
        <h1 className="brand-name">BeWatch</h1>
      </div>
      <nav>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
