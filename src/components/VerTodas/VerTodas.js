import React, { Component } from "react";
import { options } from "../../options";
import Pelicula from "../Pelicula/Pelicula";
import "./VerTodas.css";


class VerTodas extends Component{

  constructor(props) {
    super(props)
    this.state = {
        movies: [],
        filteredMovies: [],
        userValue: "",
        actualPage: 1
    }
}

  componentDidMount(){
      const {link} = this.props
      fetch(`https://api.themoviedb.org/3/movie/${link}?api_key=2e1ba77b764a76e2e48e86179135ae4d&page=${this.state.actualPage}`, options)
      .then(response => response.json())
      .then(data => this.setState({
          movies: data.results,
          filteredMovies: this.state.movies.concat(data.results),
          actualPage: this.state.actualPage + 1
      }))
  }

  handleResetFilter(){
      this.setState({
          userValue: "",
          filteredMovies: this.state.movies
      })
  }

  handleLoadMore(){
      const {link} = this.props
      fetch(`https://api.themoviedb.org/3/movie/${link}?api_key=2e1ba77b764a76e2e48e86179135ae4d&page=${this.state.actualPage}`, options) 
      .then(response => response.json())
      .then(data => {
          const moreMovies = [];
          movies.map((movie) => moreMovies.push(movie));
          data.results.map((result) => moreMovies.push(result));

          this.setState({
              movies: moreMovies,
              filteredMovies: moreMovies,
              actualPage: this.state.actualPage + 1})
      })   
  }

  handleFilterChange(e){
      const userValue = e.target.value;

      this.setState({
          filterValue: userValue,
          filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
      })
  }



  render(){
      const { filteredMovies, userValue } = this.state
      
      return(
          <>
            <div>
              <label>Filtrar pelicula por nombre: </label>
              <input type="text" value={userValue} onChange={(e) => this.handleFilterChange(e)} />
            </div>

            <button onClick={() => this.handleResetFilter()}> Resetear el filtro </button>
            {filteredMovies.length === 0 ? (
              <p> No se encontraron peliculas para esa busqueda </p>
            ) : (filteredMovies.map((movies, index) => <Pelicula movies={movies} key={index} /> )
            )}

            <button onClick={() => this.handleLoadMore()}> Cargar mas ... </button>
          </>
      )
  }

}

export default VerTodas;