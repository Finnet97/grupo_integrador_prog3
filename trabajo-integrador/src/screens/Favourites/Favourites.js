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

//hago que se, al quitar una pelicula o serie, se filtre el array correspondiente quitando esa y actualizando el estado
   removeFavourite(type, id) {
    if (type === "movie") {
      let newArray = this.state.items.filter(m => m.id !== id);
      this.setState({ items: newArray });
    }

    if (type === "tv") {
      let newArrayTv = this.state.itemsTv.filter(t => t.id !== id);
      this.setState({ itemsTv: newArrayTv });
    }
  }

  componentDidMount() {

  //recupero peliculas favoritas 
  let favoritosMovie = JSON.parse(localStorage.getItem("movie"))

  //si hay peliculas guardadas, obtengo el id y obtengo la info de cada una desde la api:
  if (favoritosMovie !==null) {
    
    for (let i = 0; i < favoritosMovie.length; i++) {
        let id = favoritosMovie[i];
        if (id) { //chequeo que el id sea valido
          let url = `${api_url}/movie/${id}?api_key=${api_key}`;
       
        console.log(url)

    //hago el fetch y agrego los datos a newArray
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let newArray= this.state.items
        newArray.push(data)
        this.setState({items: newArray}) //actualizo el estado para que items valga lo mismo que newArray
      })
      .catch((err) => console.log(err));
           
    }
        

    }
    }
    console.log (this.state.items)

    //recupero series favoritas 
    let favoritosTv = JSON.parse(localStorage.getItem("tv"))

  //si hay series guardadas, obtengo el id y obtengo la info de cada una desde la api:
  if (favoritosTv !==null) {
    
    for (let i = 0; i < favoritosTv.length; i++) {
        let idTv = favoritosTv[i];
        if (idTv) { //chequeo que el idTv sea valido
          let urlTv = `${api_url}/tv/${idTv}?api_key=${api_key}`;
       
        console.log(urlTv)

//hago el fetch y agrego los datos a arrayTv
    fetch(urlTv)
      .then((res) => res.json())
      .then((data) => {
        let arrayTv= this.state.itemsTv
        arrayTv.push(data)
        this.setState({itemsTv: arrayTv}) //actualizo el estado para que itemsTv valga lo mismo que arrayTv
      })
      .catch((err) => console.log(err));
           
    }
        

    }
    }
    console.log (this.state.itemsTv)

  }

  render() {
    const items = this.state.items;
    const itemsTv = this.state.itemsTv;

    return (
      <section className="home-block">
        <Header />
        <div className="home-block__header">
          <h2 className="favstitle">Peliculas favoritas</h2>
        
        </div>
{/* muestro las peliculas favoritas, que son las que se encuentran en items */}
        <div className="cards-grid">
          {items.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              type= "movie"
              title={movie.title || movie.name}
              image={movie.poster_path}
              descripcion={movie.overview}
              onRemove={(id) => this.removeFavourite("movie", id)} //llama a removeFavourite para que al clickear quitar, se borre esa pelicula de la lista
            />
          ))}
        </div>
                <div className="home-block__header">
          <h2 className="favstitle">Series favoritas</h2>
        
        </div>
{/* muestro las series favoritas, que son las que se encuentran en itemsTv */}
        <div className="cards-grid">
          {itemsTv.map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              type= "tv"
              title={tv.title || tv.name}
              image={tv.poster_path}
              descripcion={tv.overview}
              onRemove={(id) => this.removeFavourite("tv", id)} //llama a removeFavourite para que al clickear quitar, se borre esa serie de la lista
            />
          ))}
        </div>
      </section>    
    );
  }
}

export default Favourites;