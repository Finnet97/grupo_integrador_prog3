import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDescripcion: false,
      estadoFavorito: false
    };
  }

  componentDidMount(){
    let favoritos= JSON.parse(localStorage.getItem(this.props.type))
if(favoritos!==null){
    if (favoritos.includes(this.props.id)) {
      this.setState({
      estadoFavorito: true
    })

    }
  }
}

  VerDescripcion() {
    this.setState({
      mostrarDescripcion: !this.state.mostrarDescripcion
    });
  }


  funcionFavoritos(){
    let favoritosNuevo= []
    let favoritosViejo = JSON.parse(localStorage.getItem(this.props.type))
    if (favoritosViejo!== null) {
          favoritosNuevo = favoritosViejo
        }



    if (this.state.estadoFavorito===false) {
          favoritosNuevo.push (this.props.id)
      
    } else {
      favoritosNuevo= favoritosNuevo.filter(elm => elm !== this.props.id)
      

    }


    console.log (favoritosNuevo)
    this.setState({
      estadoFavorito: !this.state.estadoFavorito
    })
    localStorage.setItem(this.props.type, JSON.stringify(favoritosNuevo))

  //    if (this.state.estadoFavorito && this.props.onRemove) {
  //   this.props.onRemove(this.props.id);
  // }
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
              <button onClick={() => this.VerDescripcion()}>
                {this.state.mostrarDescripcion
                  ? "Ocultar descripción"
                  : "Ver descripción"}
              </button>

              {this.state.mostrarDescripcion && (
                <p>{this.props.descripcion}</p>
              )}


            </>
          )}
            <button onClick={() => this.funcionFavoritos()}>
                {this.state.estadoFavorito
                  ? "Quitar de favoritos"
                  : "agregar a favoritos"}
              </button>
        </div>
      </section>
    );
  }
}

export default Card;