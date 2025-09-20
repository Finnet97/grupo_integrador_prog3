import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const api_key = "81720e942b917284685b4ca30d46b061";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: [],
      dataTv: [],
    };
  }

  componentDidMount() {
    console.log(this.props);

    let urlSearch= new URLSearchParams(this.props.location.search);
    let search = urlSearch.get("searchData");
    console.log(search);

   
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}&language=es-AR`)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataMovies: data.results });
      })
      .catch(err => console.log(err));

 
    fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=${api_key}&language=es-AR`)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataTv: data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="home-block">
        <Header />

        <div className="home-block__header">
          <h2>Resultados de búsqueda</h2>
        </div>

        <div className="home-block__header">
          <h3>Películas</h3>
        </div>
        <div className="cards-grid">
          {this.state.dataMovies.map(movie => (
            <Card
              key={movie.id}
              id={movie.id}
              type="movie"
              title={movie.title || movie.name}
              image={movie.poster_path}
              descripcion={movie.overview}
            />
          ))}
        </div>

        <div className="home-block__header">
          <h3>Series</h3>
        </div>
        <div className="cards-grid">
          {this.state.dataTv.map(tv => (
            <Card
              key={tv.id}
              id={tv.id}
              type="tv"
              title={tv.title || tv.name}
              image={tv.poster_path}
              descripcion={tv.overview}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;