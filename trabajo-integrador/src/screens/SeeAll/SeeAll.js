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
      contador: 5
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
      // si cambia el type(tv o movie) y el endpoint el contador vuelve a 5 otra vez y se carga toda la info de nuevo
      this.setState({ items: [], contador: 5 });
      this.cargarDatos(typeActual, endpointActual);
    }
  }

  cargarDatos(type, endpoint) {
    const url =  api_url + "/" + type + "/" + endpoint + "?api_key=" + api_key + "&language=es-AR";
    fetch(url)
      .then(function(res) { return res.json(); })
      .then((data) => {
        const resultados = data && data.results ? data.results : [];
        this.setState({ items: resultados });
      })
      .catch(function(err) { console.log(err); });
  }

  cargarMas() {
    this.setState({ contador: this.state.contador + 5 });
  }

  render() {
    const type = this.props.match.params.type;
    const items = this.state.items;
    const contador = this.state.contador;

    return (
      <div>
        <Header />
        <main className="container">
          <h2>Resultados</h2>

          {items.length === 0 && <p>No hay resultados.</p>}

          {items.length > 0 && (
            <div>
              <div className="cards-grid">
                {items.map((item, index) => {
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

              {contador < items.length && (
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