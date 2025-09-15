import React from "react";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards";
import Header from '../../components/Header/Header';
function Movies() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Personajes</h1>
        <Cards/>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Movies;