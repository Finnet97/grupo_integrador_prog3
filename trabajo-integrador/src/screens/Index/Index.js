
import React from 'react';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';    
import Header from '../../components/Header/Header';
import './index.css';

function Index() {
  return (
    <>
      <Header />
      <main>
        <Cards title="Peliculas populares" type="movie" endpoint="popular" seeAllPath="/seeall/movie/popular"/>
      </main>

      <main>
        <Cards title="Películas en cartel"  type="movie" endpoint="now_playing" seeAllPath="/seeall/movie/now_playing"/>
      </main>

      <main>
        <Cards title="Series populares" type="tv" endpoint="popular" seeAllPath="/seeall/tv/popular" />
      </main>

      <main>
        <Cards title="Series al aire hoy" type="tv" endpoint="airing_today" seeAllPath="/seeall/tv/airing_today"/>
      </main>
      <Footer />
    </>
  );
}

export default Index;