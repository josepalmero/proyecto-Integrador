import React, { Component } from 'react';
import Pelicula from '../components/Pelicula/Pelicula';

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    this.setState({
                        movies: data.results,
                        isLoading: false
                    })
                } else {
                    console.error('No se encontaron resultados para su busqueda')
                    this.setState({
                        isLoading: false,
                        error: 'error'
                    })
                }
            })
            .catch((error) => {
                console.error('error', error)
                this.setState({
                    isLoading: false,
                    error: 'error'
                })
            })
    }

    render() {
        const { movies, isLoading, error } = this.state

        return (
            <>
                <h2> Resultados de búsqueda: {this.props.location.state.query} </h2>


                {isLoading ?
                    <p className='cargando'>Cargando...</p>
                    : error ?
                        <p>Error en la carga de resultados</p>
                        : movies.length > 0 ? 
                            <section className='result-busqueda'>
                                {movies.map((movie) => (<Pelicula key={movie.id} infoMovie={movie} />))}
                            </section> 
                            : <p className='noResults'>No se encontaron resultados para su búsqueda</p>
                }



            </>
        )
    }
}

export default SearchResults