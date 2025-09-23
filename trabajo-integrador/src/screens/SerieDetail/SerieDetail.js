import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
            tv: null,
            estadoFavorito: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;           // id de la URL (string)
        const idNum = Number(id);                         // lo pasamos a número

        const url = API + "/tv/" + id + "?api_key=" + KEY;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ tv: data, loading: false, error: null });
            })
            .catch(err => {
                console.log(err);
                this.setState({ tv: null, loading: false, error: "Error al cargar" });
            });


        const guardados = JSON.parse(localStorage.getItem("tv")) || [];

        const esta = guardados.includes(idNum) || guardados.includes(id);
        if (esta) {
            this.setState({ estadoFavorito: true });
        }
    }

    funcionFavoritos() {
        const id = this.props.match.params.id;
        const idNum = Number(id);
        const key = "tv";

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

        const poster = IMG + tv.poster_path;

        const titulo = tv.name;
        const lanzamiento = tv.first_air_date;
        const rating = tv.vote_average;
        const sinopsis = tv.overview;


        let generos = [];
        if (tv.genres && tv.genres.length > 0) {
            generos = tv.genres.map(function (g) { return g.name; });
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
                            <p><strong>Lanzamiento:</strong> {lanzamiento}</p>
                            <p><strong>Rating:</strong> {rating}</p>
                            <p><strong>Overview:</strong> {sinopsis}</p>
                            <p><strong>Géneros:</strong> {generos.length > 0 ? generos.join(" · ") : "—"}</p>
                            <button className="btn-fav" onClick={() => this.funcionFavoritos()}>
                                {this.state.estadoFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                            </button>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SerieDetail;
