import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./moviedetail.css";

const API = "https://api.themoviedb.org/3";
const KEY = "81720e942b917284685b4ca30d46b061";
const IMG = "https://image.tmdb.org/t/p/w500";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            movie: null,
            estadoFavorito: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;           // id de la URL (string)
        const idNum = Number(id);                         // lo pasamos a número

        const url = API + "/movie/" + id + "?api_key=" + KEY;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ movie: data, loading: false, error: null });
            })
            .catch(err => {
                console.log(err);
                this.setState({ movie: null, loading: false, error: "Error al cargar" });
            });

        
        const guardados = JSON.parse(localStorage.getItem("movie")) || [];
        
        const esta = guardados.includes(idNum) || guardados.includes(id); 
        if (esta) {
            this.setState({ estadoFavorito: true });
        }
    }

    funcionFavoritos() {
        const id = this.props.match.params.id;
        const idNum = Number(id);
        const key = "movie";

        // Leo losfavoritos actuales
        let favoritos = JSON.parse(localStorage.getItem(key)) || [];

        if (this.state.estadoFavorito === false) {
            // Agregar
            if (!favoritos.includes(idNum) && !favoritos.includes(id)) {
                favoritos.push(idNum); 
            }
        } else {
            favoritos = favoritos.filter(function (item) {
                return item !== idNum && item !== id; 
            });
        }

        localStorage.setItem(key, JSON.stringify(favoritos));
        this.setState({ estadoFavorito: !this.state.estadoFavorito });
    }

    render() {
        const loading = this.state.loading;
        const error = this.state.error;
        const movie = this.state.movie;

        if (loading) {
            return <main className="detail-wrap"><p>Cargando…</p></main>;
        }

        if (error) {
            return <main className="detail-wrap"><p>{error}</p></main>;
        }

        if (!movie) {
            return <main className="detail-wrap"><p>No hay datos para mostrar.</p></main>;
        }

        const poster = IMG + movie.poster_path;

        const titulo = movie.title;
        const fecha = movie.release_date;
        const rating = movie.vote_average;
        const duracion = movie.runtime + " min";
        const sinopsis = movie.overview;
        let generos = [];
        if (movie.genres && movie.genres.length > 0) {
            generos = movie.genres.map(function (g) { return g.name; });
        }

        return (
            <React.Fragment>
                <Header />
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
                            <p><strong>Fecha:</strong> {fecha}</p>
                            <p><strong>Rating:</strong> {rating}</p>
                            <p><strong>Duración:</strong> {duracion}</p>
                            <p><strong>Sinopsis:</strong> {sinopsis}</p>
                            <p><strong>Géneros:</strong> {generos.length > 0 ? generos.join(" · ") : "—"}</p>
                            <button onClick={() => this.funcionFavoritos()}>
                                {this.state.estadoFavorito ? "Quitar de favoritos" : "agregar a favoritos"}
                            </button>
                        </div>
                    </section>

                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MovieDetail;