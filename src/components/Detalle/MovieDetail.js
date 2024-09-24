import React, { Component } from 'react';
import "./MovieDetail.css"

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            movie: null,  
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
          }) 

        const {id} = this.props.match.params

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({movie: data})
            })
            .catch((error) => console.log(error))
    
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
        const {poster_path,  title, clasificacion, genero, release_date, runtime, overview} = this.props.movies

        return (
            <article>
                <div>
                    <img src= {`https://image.tmdb.org/t/p/w342/${poster_path}`} alt= {title}/>
                    <h1>Titulo: {title}</h1>
                    <p>Clasificacion: {clasificacion}</p>
                    <p>Genero: {genero}</p>
                    <p>Fecha de estreno: {release_date}</p>
                    <p>Duracion: {runtime}</p>
                    <p>Sinopsis: {overview}</p>
                </div>
            </article>
            // agregar la posibilidad de agregar a favoritos
        )

    }
}

export default MovieDetail
