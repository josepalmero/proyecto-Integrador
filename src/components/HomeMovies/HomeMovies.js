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

          <h1> {this.props.nombre}</h1>
          <p><Link to={this.props.link}></Link>Ver Todas</p> 
          {
            this.state.movies.map((movie, idx) => <Pelicula key={movie.name + idx} infoMovie={movie} />)
          }
        </section>
      </div>
    )
    
    /// arreglar el link de ver todas
    //// que se vean 5 populares y cartelera - CHEQUEAR
  }

}

export default HomeMovies
