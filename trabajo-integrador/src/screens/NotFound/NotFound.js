import React from "react";
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
      </div>

      <div className="nf-decoration" aria-hidden="true"></div>
    </main>
  );
}

export default NotFound;