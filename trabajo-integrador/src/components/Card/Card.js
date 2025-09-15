import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDescripcion: false
    };
  }

  toggleDescripcion() {
    this.setState({
      mostrarDescripcion: !this.state.mostrarDescripcion
    });
  }

  render() {
    return (
      <section>
        <div className="character-card">
          <img
            src={`https://image.tmdb.org/t/p/w342${this.props.image}`}
            alt={this.props.title}
          />
          <h4>
            <Link to={`/movie/id/${this.props.id}`}>
              {this.props.title}
            </Link>
          </h4>

          {this.props.descripcion && (
            <>
              <button onClick={() => this.toggleDescripcion()}>
                {this.state.mostrarDescripcion
                  ? "Ocultar descripción"
                  : "Ver descripción"}
              </button>

              {this.state.mostrarDescripcion && (
                <p>{this.props.descripcion}</p>
              )}
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Card;