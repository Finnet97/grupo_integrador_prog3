import React, { Component } from "react";
import "./moviedetail.css";

const API = "https://api.themoviedb.org/3";
const KEY = "81720e942b917284685b4ca30d46b061";

// Hecho por chipo, sino los minutos se ven mal
const formatearMinutos = (m) => (m ? `${m} min` : "No disponible");

class MovieDetail extends Component {
    state = { loading: true, error: null, movie: null };

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`${API}/movie/${id}?api_key=${KEY}`)
            .then((r) => (r.ok ? r.json() : Promise.reject(r)))
            .then((data) => this.setState({ movie: data, loading: false }))
            .catch((e) => this.setState({ error: "Error al cargar", loading: false }));
    }

    render() {
        const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/img/poster_fallback.jpg";

        const director = movie.credits?.crew?.find((p) => p.job === "Director")?.name || "No disponible";

        return (
            <main className="detail-wrap">
                <div className="detail-topbar">
                    <a href="/" className="back-btn" aria-label="Go home">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <path d="M15.5 19 8.5 12l7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Back</span>
                    </a>
                </div>

                <section className="detail-card">
                    <img className="detail-poster" src={poster} alt={movie.title} />
                    <div className="detail-info">
                        <h1>{movie.title}</h1>
                        <p><strong>Fecha:</strong> {movie.release_date || "—"}</p>
                        <p><strong>Rating:</strong> {movie.vote_average ?? "—"}</p>
                        <p><strong>Duración:</strong> {formatearMinutos(movie.runtime)}</p>
                        <p><strong>Director:</strong> {director}</p>
                        <p><strong>Overview:</strong> {movie.overview || "—"}</p>
                        <p><strong>Generos:</strong> {(movie.genres || []).map(g => g.name).join(" · ") || "—"}</p>
                    </div>
                </section>
            </main>
        );
    }
}

export default MovieDetail;
