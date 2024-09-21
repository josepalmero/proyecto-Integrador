import React, { Component } from 'react';

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            movie: null, // null o [] 
            isLoading: true
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US`)
            .then(response => response.json())
            .then(data => {
                this.setState({movie: data})
            })
            .catch(error => console.log(error))

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

        // destructuring de la info de movie
        const {id, img,  titulo, clasificacion, genero, estreno, duracion, sinopsis} = this.props.movie

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
