import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

const api_key = "81720e942b917284685b4ca30d46b061";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: [],
      dataTv: [],
      type: ""
    };
  }

  componentDidMount() {
    console.log(this.props);

    //recupero la informacion del formulario de busqueda
    let urlSearch = new URLSearchParams(this.props.location.search);
    let search = urlSearch.get("searchData");
    let type = urlSearch.get("searchType") || "";
    this.setState({ type });
    console.log(search, type);


    if (type === "movie") {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}`)
        .then(res => res.json())
        .then(data => this.setState({ dataMovies: data.results || [] }))
        .catch(err => console.log(err));
      return;
    }


    if (type === "tv") {
      fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=${api_key}`)
        .then(res => res.json())
        .then(data => this.setState({ dataTv: data.results || [] }))
        .catch(err => console.log(err));
      return;
    }


    //obtengo la info de cada pelicula que contrenga el parametro de busqueda (en su titulo)  y guardo esa informacion en dataMovies
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataMovies: data.results });
      })
      .catch(err => console.log(err));

    //obtengo la info de cada serie que contrenga el parametro de busqueda(en su titulo) y guardo esa informacion en dataTv
    fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataTv: data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
    <React.Fragment>
      <section className="home-block">
        <Header />

        <div className="home-block__header">
          <h2>Resultados de búsqueda</h2>
        </div>

        <div className="home-block__header">
          <h3>Películas</h3>
        </div>
        <div className="cards-grid">
          {/* muestro las peliculas que se encontraron a partir de esa busqueda */}
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
          {/* muestro las series que se encontraron a partir de esa busqueda */}
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
      <Footer/>
      </React.Fragment>
    );
  }
}

export default SearchResults;