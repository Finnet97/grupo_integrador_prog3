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
    let type = this.props.type ? this.props.type : "movie";
    let endpoint = this.props.endpoint ? this.props.endpoint : "popular";

    const url = `${api_url}/${type}/${endpoint}?api_key=${api_key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ items: data.results || [] }))
      .catch((err) => console.log(err));
  }

  render() {
    const title = this.props.title ? this.props.title : ""; // usamos esto porque puede haber sin titulo
    const seeAllPath = this.props.seeAllPath;

    return (
      <section className="home-block">
        <div className="home-block__header">
          <h2 className="titulos-cards">{title}</h2>

          {seeAllPath && (
            <Link to={seeAllPath} className="btn-seeall">
              Ver todo
            </Link>
          )}
        </div>

        <div className="cards-grid">
          {this.state.items.map((movie) => (
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