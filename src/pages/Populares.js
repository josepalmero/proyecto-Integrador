import React, { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";
// import VerTodas from "../components/VerTodas/VerTodas";

class Populares extends Component {

    conastructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            filterValue: "",
            actualPage: 1
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d&page=${this.state.actualPage}`)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            filteredMovies: this.state.movies.concat(data.results),
            actualPage: this.state.actualPage + 1
        }))
    }

    handleResetFilter(){
        this.setState({
            filterValue: "",
            filteredMovies: this.state.movies
        })
    }

    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d&page=${this.state.actualPage}`) 
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            filteredMovies: data.results,
            actualPage: this.state.actualPage + 1}))
    }

    handleFilterChange(e){
        const userValue = e.target.value;

        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }



    render(){
        return(
            <>
                <h1>Peliculas Populares</h1>
                <input type = "text" onChange={(e) => this.handleFilterChange(e)} value= {this.state.filterValue}/>
    
                {/* <VerTodas movies={this.state.filteredMovies} nombre={"Peliculas Populares"} url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d"} link={"/populares"}/> */}

                <button onClick={() => this.handleResetFilter()}>Reset Filter</button>

                <HomeMovies movies={this.state.filteredMovies} />

                <button onClick={() => this.handleLoadMore()}>CARGAR MÁS</button>
            </>
        )
    }



}

export default Populares 