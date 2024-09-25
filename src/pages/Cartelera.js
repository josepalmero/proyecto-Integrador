import React, { Component } from "react";
import VerTodas from "../components/VerTodas/VerTodas";
import { options } from "../options";


class Cartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            userValue: "",
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
                console.log(data)
                this.setState({
                    movies: data.results,
                    filteredMovies: this.state.movies.concat(data.results),
                    actualPage: this.state.actualPage + 1,
                    isLoading: false
                })
            })
    }

    handleResetFilter() {
        this.setState({
            userValue: "",
            filteredMovies: this.state.movies
        })
    }

    handleLoadMore() {
        fetch(`https://api.themoviedb.org/3/movie/api_key=2e1ba77b764a76e2e48e86179135ae4d&page=${this.state.actualPage}`, options)
            .then(response => response.json())
            .then(data => {
                const moreMovies = [];
                const movies = this.state.movies
                movies.map((movie) => moreMovies.push(movie));
                data.results.map((result) => moreMovies.push(result));

                this.setState({
                    movies: moreMovies,
                    filteredMovies: moreMovies,
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
        return (
            <>
                <h1>Peliculas En Cartelera</h1>
                {this.state.isLoading ? <p>Cargando</p> :
                    <>
                        <div>
                            <label>Filtrar pelicula por nombre: </label>
                            <input type="text" />
                        </div>
                        <button onClick={() => this.handleResetFilter()}> Resetear el filtro </button>
                        <VerTodas movies={this.state.movies} />
                    </>
                }
                <button onClick={() => this.handleLoadMore()}> Cargar Más </button>
            </>
        )
    }

}

export default Cartelera