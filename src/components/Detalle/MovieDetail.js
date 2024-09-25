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
        this.setState({
            isLoading: true
        })

        const {id} = this.props;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
            .then((data) => 
                this.setState({
                    movie: data,
                    isLoading: false
                })
            )
            .catch((error) => console.log(error));
            
    }

    render() {
        const { movie, isLoading } = this.state

        if (isLoading) {
            return <p>Cargando...</p>
        }

        // destructuring de la info de movie
        const {poster_path,  title, genres, release_date, runtime, overview} = movie

        return (
            <article className="movie-detail-container">
                <section className='movie-detail'>
                    <img src= {`https://image.tmdb.org/t/p/w342/${poster_path}`} alt= {title} className='img'/>
                    <h2 className='h2'>Titulo: {title}</h2>
                    <p className='p'>Generos: {genres.map((genre) => genre.name).join(',')}</p>
                    <p lassName='p'>Fecha de estreno: {release_date}</p>
                    <p lassName='p'>Duracion: {runtime} minutos</p>
                    <p lassName='p'>Sinopsis: {overview}</p>
                </section>   
            </article>
        )

    }
}

export default MovieDetail
