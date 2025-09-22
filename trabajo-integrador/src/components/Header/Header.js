import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <a href="/">
          <img src="/img/BeWatch_logo.png" alt="BeWatch" className="logo" />
          <h1 className="brand-name">BeWatch</h1>
        </a>
      </div>

      <form className="search-form" action="/SearchResults" method="get" role="search" aria-label="Buscar en BeWatch">
        <label className="sr-only">Buscar</label>
        <input id="site-search" type="search" name="searchData" placeholder="Buscar..." className="search-input" />
        <select name="searchType" defaultValue="" className="search-select">
          <option value="" >Elegir...</option>
          <option value="movie">Películas</option>
          <option value="tv">Series</option>
        </select>
        <button type="submit">Buscar</button>
      </form>

      <nav>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/seeall/movie/popular">Películas populares</Link></li>
          <li><Link to="/seeall/movie/now_playing">Cartelera</Link></li>
          <li><Link to="/seeall/tv/popular">Series populares</Link></li>
          <li><Link to="/seeall/tv/airing_today">Al aire</Link></li>
          <li><Link to="/favourites">Favoritos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
