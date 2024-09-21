import React, { Component } from "react";

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

  render() {
    const { id, img, nombre, descripcion } = this.props.pelicula

    return (
      <div>

        <article>
          <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />
          <h1>Nombre: {nombre}</h1>
          <p>Descripcion: {descripcion}</p>
        </article>

      </div>

      ///boton ver todas -> con prop Link
      ///boton ver descrpcion
      ///boton ir a detalle
      ///boton agregar a favoritos 
    )

  }

}

export default HomeMovies
