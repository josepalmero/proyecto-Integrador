import React, { Component } from 'react';
import "./MovieDetail.css"

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            movie: null,  
            isLoading: true,
        }
    }

    componentDidMount() {
        const {id} = this.props

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movie: data,
                    isLoading: false
                })
            })
            .catch((error) => console.log(error));
            this.setState({
                isLoading: false
            })
    }

    render() {
        const {movie} = this.state

        {/*if (!movie) {
            <p>Cargando...</p>
        }*/}

        // destructuring de la info de movie
        const {poster_path,  title, genres, release_date, runtime, overview} = movie

        return (
            <article>
                <div>
                    <img src= {`https://image.tmdb.org/t/p/w342/${poster_path}`} alt= {title}/>
                    <h2>Titulo: {title}</h2>
                    <p>Generos: {genres.map((genre) => genre.name).join(',')}</p>
                    <p>Fecha de estreno: {release_date}</p>
                    <p>Duracion: {runtime}</p>
                    <p>Sinopsis: {overview}</p>
                </div>
            </article>
        )

    }
}

export default MovieDetail
