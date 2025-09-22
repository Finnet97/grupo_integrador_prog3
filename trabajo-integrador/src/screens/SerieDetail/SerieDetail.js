import React, { Component } from "react";
import "./seriedetail.css";

const API = "https://api.themoviedb.org/3";
const KEY = "81720e942b917284685b4ca30d46b061";
const IMG = "https://image.tmdb.org/t/p/w500";

class SerieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            tv: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const url = API + "/tv/" + id + "?api_key=" + KEY + "&language=es-AR";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ tv: data, loading: false, error: null });
            })
            .catch(err => {
                console.log(err);
                this.setState({ tv: null, loading: false, error: "Error al cargar" });
            });
    }

    render() {
        const loading = this.state.loading;
        const error = this.state.error;
        const tv = this.state.tv;

        if (loading) {
            return <main className="detail-wrap"><p>Cargando…</p></main>;
        }

        if (error) {
            return <main className="detail-wrap"><p>{error}</p></main>;
        }

        if (!tv) {
            return <main className="detail-wrap"><p>No hay datos para mostrar.</p></main>;
        }

        const poster = tv.poster_path ? IMG + tv.poster_path : "/img/poster_fallback.jpg";

        const titulo = tv.name ? tv.name : "—";
        const lanzamiento = tv.first_air_date ? tv.first_air_date : "—";
        const rating = (tv.vote_average || tv.vote_average === 0) ? tv.vote_average : "—";
        const sinopsis = tv.overview ? tv.overview : "—";

        let duracion = "No disponible";
        if (tv.episode_run_time && tv.episode_run_time.length > 0) {
            duracion = tv.episode_run_time[0] + " min";
        }

        let generos = [];
        if (tv.genres && tv.genres.length > 0) {
            generos = tv.genres.map(function (g) { return g.name; });
        }

        return (
            <main className="detail-wrap">
                <div className="detail-topbar">
                    <a href="/" className="back-btn">
                        <p>←</p>
                        <span>Atrás</span>
                    </a>
                </div>

                <section className="detail-card">
                    <img className="detail-poster" src={poster} alt={titulo} />
                    <div className="detail-info">
                        <h1>{titulo}</h1>
                        <p><strong>Lanzamiento:</strong> {lanzamiento}</p>
                        <p><strong>Rating:</strong> {rating}</p>
                        <p><strong>Duración de episodios:</strong> {duracion}</p>
                        <p><strong>Overview:</strong> {sinopsis}</p>
                        <p><strong>Géneros:</strong> {generos.length > 0 ? generos.join(" · ") : "—"}</p>
                    </div>
                </section>
            </main>
        );
    }
}

export default SerieDetail;
