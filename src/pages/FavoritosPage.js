import React, { Component } from 'react';
import HomeMovies from "../components/HomeMovies/HomeMovies";


class FavoritosPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount(){

        const storage = localStorage.getItem("favoritos")
        
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            Promise.all( 
                parsedStorage.map((id) => 
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`).then((response) => response.json()))
                ).then((data) => {
                    this.setState({
                        movies: data
                    })
            })
        }
    }
    
    render() {
        return(
            <div> 
                <HomeMovies movies = {this.state.movies}/> 
                { !this.state.isLoading ? <p>FAVORITOS</p> : <p className='loader'>Cargando...</p> }
             </div>
        )
    }
}

export default FavoritosPage