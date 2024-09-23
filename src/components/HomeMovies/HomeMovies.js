import React, { Component } from "react";
import { Link } from "react-router-dom";
import { options } from "../../options.js" 
import "./HomeMovies.css"

class HomeMovies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      isLoading: true,
      esFavorito: false,
      showDesc:false,
      showExtra: false
    }
  }

////boton del detalle
  handleShowDesc(){
    this.setState({
      showDesc: !this.state.showDesc
    })
  }
  handleShowExtra(){
    this.setState({
      showExtra: !this.state.showExtra
    })
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
    
    const storage = localStorage.getItem("favoritos")
    if(storage !== null){
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }

    this.setState({
      isLoading: false
    })


  }

agregarFavoritos() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        parsedArray.push(this.props.movie.id)
        const stringArray = JSON.stringify(parsedArray)
        localStorage.setItem('favoritos', stringArray)
    } else {
        const primerPelicula = [this.props.movie.id]
        const stringArray = JSON.stringify(primerPelicula)
        localStorage.setItem('favoritos', stringArray)
    }
    this.state({
        esFavorito: true
    })
}

sacarFavoritos(){
    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
    const stringArray = JSON.stringify(favoritosRestantes)
    localStorage.setItem('favoritos', stringArray)
    this.setState({ 
        esFavorito: false 
    })
}


  
  render() {
    const { id, img, nombre, descripcion, extra } = this.props.pelicula

    return (
      <div>
        <section className="peliculas-container">

          <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />

          <h1><Link to={`/detalle/id/${id}`}> {nombre} </Link></h1>

          <p>{descripcion}</p>
          <button onClick={()=> this.handleShowDesc()}> {this.state.showDesc ? "Ocultar descripcion" : "Ver descripcion"} </button>
          
          <p><Link to={`/detalle/id/${id}`}>Ir a detalle</Link></p>

          <button onClick = {() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
            {!this.state.esFavorito ? 'Agregar a favoritos' : 'Sacar de favoritos'}
          </button>

          <p>{extra}</p>
          <p><Link to={`/verTodas`}></Link>Ver Todas</p>
         
        </section>

      </div>

    )

    /// formulario de busqueda - lo puse en navebar
    //// que se vean 5 populares y cartelera
    

  }

}

export default HomeMovies
