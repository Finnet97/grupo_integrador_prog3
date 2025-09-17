import React, { Component } from "react";
import Card from '../../components/Card/Card';
import Header from "../../components/Header/Header";

const api_key = "81720e942b917284685b4ca30d46b061";
const api_url = "https://api.themoviedb.org/3";



class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
     let favoritos = JSON.parse(localStorage.getItem("movie"))

    if (favoritos !==null) {
    
    for (let i = 0; i < favoritos.length; i++) {
        let id = favoritos[i];
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
    console.log (this.state.items)


  }
//falta series favoritas, solo tenemos movies favoritas
  render() {
    const { items } = this.state;

    return (
      <section className="home-block">
        <Header />
        <div className="home-block__header">
          <h2>"Peliculas favoritas"</h2>
        
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
      </section>
    );
  }
}

export default Favourites;