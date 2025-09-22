import React, { Component } from "react";
import "./seriedetail.css";

const API = "https://api.themoviedb.org/3";
const KEY = "81720e942b917284685b4ca30d46b061";

// Mismo que la funcion que esta para las peliculas solo que con las series hay que hacer alto quilombo para que se vea bien
const formatearDuracion = (arr) =>
    Array.isArray(arr) && arr.length ? `${Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)} min` : "No disponible";

class SerieDetail extends Component {
    state = { loading: true, error: null, tv: null };

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`${API}/tv/${id}?api_key=${KEY}`)
            .then((r) => (r.ok ? r.json() : Promise.reject(r)))
            .then((data) => this.setState({ tv: data, loading: false }))
            .catch((e) => this.setState({ error: "Error al cargar", loading: false }));
    }

    render() {
        const poster = tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : "/img/poster_fallback.jpg";

        const creators = (tv.created_by || []).map(c => c.name).join(" · ") || "No disponible";

        return (
            <main className="detail-wrap">
                <div className="detail-topbar">
                    <button className="back-btn" onClick={this.handleBack} aria-label="Go back">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <path d="M15.5 19 8.5 12l7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Back</span>
                    </button>
                </div>

                <section className="detail-card">
                    <img className="detail-poster" src={poster} alt={tv.name} />
                    <div className="detail-info">
                        <h1>{tv.name}</h1>
                        <p><strong>Lanzamiento:</strong> {tv.first_air_date || "—"}</p>
                        <p><strong>Rating:</strong> {tv.vote_average ?? "—"}</p>
                        <p><strong>Duración de episodios:</strong> {formatearDuracion(tv.episode_run_time)}</p>
                        <p><strong>Creada por:</strong> {creators}</p>
                        <p><strong>Overview:</strong> {tv.overview || "—"}</p>
                        <p><strong>Generos:</strong> {(tv.genres || []).map(g => g.name).join(" · ") || "—"}</p>
                    </div>
                </section>
            </main>
        );
    }
}

export default SerieDetail;
