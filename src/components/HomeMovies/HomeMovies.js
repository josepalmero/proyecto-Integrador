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
  
  

  
////nose si tenenos que borrar este componentDidMount xq hay dos
  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const url = this.props.url

    fetch(url, options) // tira error este options
      .then((response) => response.json())
      .then((data) => { this.setState({ movies: data.results }) })
      .catch((error) => console.log(error));

    this.setState({
      isLoading: false
    })
  }
  
  render() {
    const { id, nombre } = this.props.pelicula
    return (
      <div>
        <section className="peliculas-container">

          <h1><Link to={`/detalle/id/${id}`}> {nombre} </Link></h1>
          <p><Link to={`/verTodas`}></Link>Ver Todas</p>
          {
            this.state.movies.map((movie, idx) => <Pelicula key={movie.name + idx} infoMovie={movie} />)
          }
        </section>
      </div>
    )

    /// formulario de busqueda - lo puse en navebar
    //// que se vean 5 populares y cartelera
  }

}

export default HomeMovies
