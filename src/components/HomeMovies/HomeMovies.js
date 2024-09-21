import React, { Component } from "react";
import { Link } from "react-router-dom"

class HomeMovies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      isLoading: true

    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const url = this.props.url

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => { this.setState({ movies: data.results }) })
      .catch((error) => console.log(error));

    this.setState({
      isLoading: false
    })

  }

  componentDidMount(){
    const storage = localStorage.getItem("favoritos")
    if(storage !== null){
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }
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
    const { id, img, nombre, descripcion } = this.props.pelicula

    return (
      <div>
        <article>
          <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />
          <h1>Nombre: {nombre}</h1>
          <p>Descripcion: {descripcion}</p>
          <p><Link to={`/verTodas/:id`}>Ver descripcion</Link></p>
          <p><Link to={`/detalle/:id`}>Ir a detalle</Link></p>
          <button onClick={()=>this.agregarFavoritos()}> {!this.state.esFavorito ? 'Agregar a favoritos' : 'Sacar de favoritos'} </button>
          <p><Link to={`/verTodas`}>Ver mas</Link></p>
        </article>
      </div>

    )
    /// formulario de busqueda
    //// la descripcion debe aprarecer oculta 
    //// boton ver descrpcion - no estoy segura de que esa sea la ruta correcta 

  }

}

export default HomeMovies
