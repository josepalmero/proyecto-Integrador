import React, { Component } from "react";
import VerTodas from "../components/VerTodas/VerTodas";
import { options } from "../options";


class Cartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            filterValue: "",
            actualPage: 1,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })

        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}`, options)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    filteredMovies: data.results,
                    actualPage: this.state.actualPage + 1,
                    isLoading: false
                })
            })
    }

    handleResetFilter() {
        this.setState({
            filterValue: "",
            filteredMovies: this.state.movies
        })
    }

    handleLoadMore() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}`, options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: this.state.movies.concat(data.results),
                    filteredMovies: this.state.movies.concat(data.results),
                    actualPage: this.state.actualPage + 1
                })
            })
    }

    handleFilterChange(e) {
        const userValue = e.target.value;

        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }

    render() {
        const { isLoading, filteredMovies, filterValue} = this.state

        return (
            <>
                <h1 className="titulo">Peliculas En Cartelera</h1>
                {isLoading ? <p>Cargando</p> :
                    <>
                        <div className="filtro">
                            <label>Filtrar pelicula por nombre: </label>
                            <input type="text" onChange={(e) => this.handleFilterChange(e)} value={filterValue} />
                            <button onClick={() => this.handleResetFilter()}> Resetear el filtro </button>
                        </div>
                        {filteredMovies.length > 0 ? (
                            <> 
                                <VerTodas movies={filteredMovies} />
                                <button onClick={() => this.handleLoadMore()} className="boton-cargarMas"> Cargar Más </button>
                            </>
                        ) : (
                            <p className='noResults'>No se encontraron resultados para su busqueda</p>
                        )}
                    </>
                }   
            </>
        )
    }

}

export default Cartelera