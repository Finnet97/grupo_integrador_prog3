import React, { Component } from "react";
import Card from "../Card/Card";
import './cards.css'

const api_key = "81720e942b917284685b4ca30d46b061";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      pelis: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => this.setState({ pelis: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section className="cards-grid">
        {this.state.pelis.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            descripcion={movie.overview}
          />
        ))}
      </section>
    );
  }
}

export default Cards;