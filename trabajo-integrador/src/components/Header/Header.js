import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [term, setTerm] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/movies" className="nav-link" activeClassName="active">
            Películas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/series" className="nav-link" activeClassName="active">
            Series
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/favourites" className="nav-link" activeClassName="active">
            Favoritas
          </NavLink>
        </li>
      </ul>

      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          aria-label="Buscar"
        />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    </nav>
  );
}
