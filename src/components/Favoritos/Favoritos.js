import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Favoritos.css";

class Favoritos extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      peliculas: []
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      Promise.all(
        parsedArray.map((id) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
        )
      ).then((data) => {
        this.setState({ peliculas: data, isLoading: false })
      })
    } else {
      this.setState({ isLoading: false })
    }
  }

  agregarFavoritos() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        parsedArray.push(this.props.infoMovie.id)
        const stringArray = JSON.stringify(parsedArray)
        localStorage.setItem('favoritos', stringArray)
    } else {
        const primerPelicula = [this.props.infoMovie.id]
        const stringArray = JSON.stringify(primerPelicula)
        localStorage.setItem('favoritos', stringArray)
    }
    this.setState({ esFavorito: true })
  }

  sacarFavoritos(id){
    const storage = localStorage.getItem('favoritos')

    if(storage){
      const parsedArray = JSON.parse(storage)
      const favoritosRestantes = parsedArray.filter(favId => favId !== id)
      const stringArray = JSON.stringify(favoritosRestantes)
      localStorage.setItem('favoritos', stringArray)

      if (favoritosRestantes.length > 0) {
        Promise.all(
            favoritosRestantes.map(id =>
              fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
                .then(response => response.json())
            )
        ).then(data => {
            this.setState({
                peliculas: data
            });
        });
      } else {
        this.setState({
          peliculas: []
        });
      }
    }
  }

  render(){
    const { peliculas } = this.state;

    return(

      <div>
        {this.state.isLoading ? (
          <h2 className='cargando'> Cargando... </h2>
        ) : ( 
          this.state.peliculas.length > 0 ? (
            <ul className='lista'>
              {peliculas.map((pelicula) => (

                <section>

                  <div>
                    <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} className='imagen'/>
                  </div>

                  <div>
                    <h4 className='nombre'>{pelicula.title}</h4>
                  </div>
                  
                  <Link to={`/detalle/${pelicula.id}`}> <button>Ir a Detalle</button> </Link> 

                  <div>
                      <button onClick = {() => this.sacarFavoritos(pelicula.id)}>
                        {!pelicula.esFavorito ? 'Sacar de favoritos' : 'Agregar a favoritos'}
                      </button>
                  </div>

                </section>

              ))}
            </ul>
          ) : (
            <p> No tienes peliculas favoritas </p>
          )
        )}
      </div>
    )
  }
}

export default Favoritos;