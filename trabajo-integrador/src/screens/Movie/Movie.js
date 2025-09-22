import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const api_key = "81720e942b917284685b4ca30d46b061";
const api_url = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";


// esto no funciona aun falta hacer que funcione


class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
  const id = this.props.match.params.id;

  fetch(api_url + "/movie/" + id + "?api_key=" + api_key)
    .then(function(res) { return res.json(); })
    .then((data) => this.setState({ movie: data }))
    .catch(function(err) { console.log(err); });
}

  render() {
    const movie = this.state.movie;

    if (!movie) {
      return <p>Cargando…</p>;
    }

    return (
      <div>
        <Header />
        <main className="movie-container">
          <h2>{movie.title}</h2>
          {movie.poster_path && (
            <img src={`${IMG}${movie.poster_path}`} alt={movie.title} />
          )}
          <p>{movie.overview}</p>
          <p><b>Calificación:</b> {movie.vote_average}</p>
          <p><b>Fecha de estreno:</b> {movie.release_date}</p>
          <p><b>Duración:</b> {movie.runtime} min</p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Movie;