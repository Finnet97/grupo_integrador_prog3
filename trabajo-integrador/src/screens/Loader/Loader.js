import React from "react";
import "./loading.css";

export function Loading() {
  return (
    <main className="loading-wrap" aria-busy="true">
      <div className="loading-card" role="status" aria-live="polite">
        <img src="/imagenes/loader.gif" alt="loader" className="loading-gif"/>
        <h1 className="loading-title">Cargando…</h1>
        <p className="loading-text">Preparando el contenido, aguarda un instante.</p>
      </div>
    </main>
  );
}

export default Loading;