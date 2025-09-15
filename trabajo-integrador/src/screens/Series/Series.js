import React from "react";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards";
import Header from '../../components/Header/Header';

function Series() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Series:</h1>
        <Cards type="tv" />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Series;