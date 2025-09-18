import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

export function NotFound() {
  return (
    <main className="nf-wrap">
      <div className="nf-card">
        <div className="nf-code" aria-hidden="true">404</div>
        <h1 className="nf-title">No encontramos esa página</h1>
        <p className="nf-text">
          Puede que el enlace esté roto o la ruta haya cambiado.
        </p>

        <div className="nf-actions">
          <Link className="btn-primary" to="/">Volver al inicio</Link>
          <Link className="btn-ghost" to="/seeall/movie/popular">Películas populares</Link>
          <Link className="btn-ghost" to="/seeall/tv/popular">Series populares</Link>
        </div>

        {/* Reciclado del otro buscador, cualquier cosa lo sacamos si es mucho quilombo (chipo) */}
        <form className="search-form nf-search" action="/SearchResults" method="get" role="search" aria-label="Buscar en BeWatch">
          <label className="sr-only">Buscar</label>
          <input id="nf-search" type="search" name="searchData" placeholder="Probar con otra búsqueda…" className="search-input"/>
        </form>
      </div>

      <div className="nf-decoration" aria-hidden="true"></div>
    </main>
  );
}

export default NotFound;