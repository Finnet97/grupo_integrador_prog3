import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./cards.css";

const api_key = "81720e942b917284685b4ca30d46b061";
const api_url = "https://api.themoviedb.org/3";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const { type = "movie", endpoint = "popular" } = this.props;
    const url = `${api_url}/${type}/${endpoint}?api_key=${api_key}&language=es-AR`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ items: data.results || [] }))
      .catch((err) => console.log(err));
  }

  render() {
    const { title = "", seeAllPath } = this.props;
    const { items } = this.state;

    return (
      <section className="home-block">
        <div className="home-block__header">
          <h2>{title}</h2>
          {seeAllPath && (
            <Link to={seeAllPath} className="btn-seeall">
              See all
            </Link>
          )}
        </div>

        <div className="cards-grid">
          {items.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              type={this.props.type}
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

export default Cards;