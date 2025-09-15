import React, {Component} from "react";
import { Link } from "react-router-dom";
//css
import './card.css'

class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
        lista: []
    }
  }

  render (){

    return (
      <section>
          <div key={this.props.id} className="character-card">
            <img src={`https://image.tmdb.org/t/p/w342${this.props.image}`} alt={this.props.title} />
            <h4>
              <Link to={`/movie/id/${this.props.id}`}>
                {this.props.title}
              </Link>
            </h4>
            <p>{this.props.descripcion}</p>
          </div>
      </section>
    );
}
}

export default Card;