import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';


function Movie(props) {
  const { id } = props.match.params;
  const movie = props.find((p) => p.id === Number(id));

  if (!movie) return <div>movie no encontrado</div>;

  return (
    <React.Fragment>
      <Header/>
      <main className="movie-container">
        <h2>{movie.name}</h2>
        <img src={`${movie.image}`} alt={movie.title} />
        <p>{movie.descripcion}</p>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Movie;