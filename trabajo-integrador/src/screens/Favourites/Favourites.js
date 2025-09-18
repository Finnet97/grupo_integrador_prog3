import React, { Component } from "react";
import Card from '../../components/Card/Card';
import Header from "../../components/Header/Header";
import "./favourites.css";

const api_key = "81720e942b917284685b4ca30d46b061";
const api_url = "https://api.themoviedb.org/3";



class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsTv: []
    };
  }

  componentDidMount() {
  let favoritosMovie = JSON.parse(localStorage.getItem("movie"))

  if (favoritosMovie !==null) {
    
    for (let i = 0; i < favoritosMovie.length; i++) {
        let id = favoritosMovie[i];
        if (id) {
          let url = `${api_url}/movie/${id}?api_key=${api_key}&language=es-AR`;
       
        console.log(url)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let newArray= this.state.items
        newArray.push(data)
        this.setState({items: newArray})
      })
      .catch((err) => console.log(err));
           
    }
        

    }
    }
    console.log (this.state.items)
    let favoritosTv = JSON.parse(localStorage.getItem("tv"))

  if (favoritosTv !==null) {
    
    for (let i = 0; i < favoritosTv.length; i++) {
        let idTv = favoritosTv[i];
        if (idTv) {
          let urlTv = `${api_url}/tv/${idTv}?api_key=${api_key}&language=es-AR`;
       
        console.log(urlTv)

    fetch(urlTv)
      .then((res) => res.json())
      .then((data) => {
        let arrayTv= this.state.itemsTv
        arrayTv.push(data)
        this.setState({itemsTv: arrayTv})
      })
      .catch((err) => console.log(err));
           
    }
        

    }
    }
    console.log (this.state.itemsTv)

  }
//falta series favoritas, solo tenemos movies favoritas
  render() {
    const { items, itemsTv } = this.state;

    return (
      <section className="home-block">
        <Header />
        <div className="home-block__header">
          <h2 className="favstitle">Peliculas favoritas</h2>
        
        </div>

        <div className="cards-grid">
          {items.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              type= "movie"
              title={movie.title || movie.name}
              image={movie.poster_path}
              descripcion={movie.overview}
            />
          ))}
        </div>
                <div className="home-block__header">
          <h2 className="favstitle">Series favoritas</h2>
        
        </div>

        <div className="cards-grid">
          {itemsTv.map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              type= "tv"
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

export default Favourites;