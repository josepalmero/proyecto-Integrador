import React, { Component } from "react";
import { Link } from "react-router-dom";
import { options } from "../../options.js" 
import "./HomeMovies.css"
import Pelicula from "../Pelicula/Pelicula.js";


class HomeMovies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const url = this.props.url

    fetch(url, options) 
      .then((response) => response.json())
      .then((data) => { this.setState({ movies: data.results.slice(0, 5) }) })
      .catch((error) => console.log(error));

    this.setState({
      isLoading: false
    })
  }
  
  render() {
  
    return (
      <div>
        <section className="peliculas-container">
          {
            this.state.movies.map((movie, idx) => <Pelicula key={movie.name + idx} infoMovie={movie} />)
          }

          <Link to={this.props.link}> <button>Ver todas</button> </Link>
        </section>
      </div>
    )
  }

}

export default HomeMovies
