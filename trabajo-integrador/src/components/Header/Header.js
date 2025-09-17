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

          <li><Link to="/seeall/movie/popular">Películas populares</Link></li>
          <li><Link to="/seeall/movie/now_playing">Películas en cartel</Link></li>

          <li><Link to="/seeall/tv/popular">Series populares</Link></li>
          <li><Link to="/seeall/tv/airing_today">Series al aire hoy</Link></li>
          <li><Link to="/favourites">Favoritos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
