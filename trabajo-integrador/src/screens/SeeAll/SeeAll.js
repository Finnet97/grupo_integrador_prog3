import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./seeall.css";

const api_key = "81720e942b917284685b4ca30d46b061";
const api_url = "https://api.themoviedb.org/3";

class SeeAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            contador: 5,
            valor: "" // texto del input
        };
    }

    componentDidMount() {
        const type = this.props.match.params.type;
        const endpoint = this.props.match.params.endpoint;
        this.cargarDatos(type, endpoint);
    }

    componentDidUpdate(prevProps) {
        const typeAnterior = prevProps.match.params.type;
        const endpointAnterior = prevProps.match.params.endpoint;
        const typeActual = this.props.match.params.type;
        const endpointActual = this.props.match.params.endpoint;

        if (typeAnterior !== typeActual || endpointAnterior !== endpointActual) {
            this.setState({ items: [], contador: 5, valor: "" });
            this.cargarDatos(typeActual, endpointActual);
        }
    }

    cargarDatos(type, endpoint) {
        const url = api_url + "/" + type + "/" + endpoint + "?api_key=" + api_key + "&language=es-AR";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const resultados = data && data.results ? data.results : [];
                this.setState({ items: resultados });
            })
            .catch((err) => console.log(err));
    }

    cargarMas() {
        this.setState({ contador: this.state.contador + 5 });
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value });
    }

    filtrarPersonajes() {
        const texto = this.state.valor.toLowerCase();

        const filtrados = this.state.items.filter((item) => {
            const titulo = (item.title || item.name || "").toLowerCase();
            return titulo.includes(texto);
        });

        return filtrados;
    }

    render() {
        const type = this.props.match.params.type;
        const contador = this.state.contador;

        const itemsFiltrados = this.filtrarPersonajes();

        return (
            <div>
                <Header />
                <main className="container">
                    <h2>Resultados</h2>

                    <form onSubmit={(event) => this.evitarSubmit(event)} className="form-filtro">
                        <label>Buscar:</label>
                        <input
                            type="text"
                            placeholder="Filtrar por título…"
                            value={this.state.valor}
                            onChange={(event) => this.controlarCambios(event)}
                        />
                    </form>

                    {itemsFiltrados.length === 0 && <p>No hay resultados.</p>}

                    {itemsFiltrados.length > 0 && (
                        <div>
                            <div className="cards-grid">
                                {itemsFiltrados.map((item, index) => {
                                    if (index < contador) {
                                        return (
                                            <Card
                                                key={item.id}
                                                id={item.id}
                                                type={type}
                                                title={item.title || item.name}
                                                image={item.poster_path}
                                                descripcion={item.overview}
                                            />
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>

                            {contador < itemsFiltrados.length && (
                                <div className="boton-cargar">
                                    <button className="btn" onClick={() => this.cargarMas()}>
                                        Cargar más
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </main>
                <Footer />
            </div>
        );
    }
}

export default SeeAll;