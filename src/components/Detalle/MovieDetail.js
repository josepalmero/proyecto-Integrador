import React, { Component } from 'react';

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            isLoading: true

        }
    }

    // agregar un fetch
    componentDidMount() {
        this.setState({
            isLoading: true
          })    
    
        //logica del codigo
    
        this.setState({
            isLoading: false
          })
    
    }

    render() {
        // const movie = this.state

        // if (!movie) {
        //     <p>Cargando...</p>
        // } CHEQUEAR 

        const {id, img,  titulo, clasificacion, genero, estreno, duracion, sinopsis} = this.props.pelicula

        return (
            <article>
                <div>
                    <img src= {`https://image.tmdb.org/t/p/w342/${img}`} alt= {titulo}/>
                    <h1>Titulo: {titulo}</h1>
                    <p>Clasificacion: {clasificacion}</p>
                    <p>Genero: {genero}</p>
                    <p>Fecha de estreno: {estreno}</p>
                    <p>Duracion: {duracion}</p>
                    <p>Sinopsis: {sinopsis}</p>
                </div>
            </article>
            // agregar la posibilidad de agregar a favoritos
        )

    }
}

export default MovieDetail
