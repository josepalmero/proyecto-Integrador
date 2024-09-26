import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class SearchResults extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=2e1ba77b764a76e2e48e86179135ae4d`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ 
                movies: data.results, 
                isLoading: false
            })
        })
        .catch((error) => console.log(error));
    }

    render(){
        const {movies, isLoading} = this.state

        return(
            <>
                <div>
                    <h2> Resultados de busqueda: {this.props.location.state.query} </h2>
                    { isLoading ? (
                        <p>Cargando...</p>
                    ) : (
                        <ul>
                            {movies.map((movie)=>(
                                <li key={movie.id}> 
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} className='img'/>
                                    </div>

                                    <div className='titulo'>
                                        <h4>{movie.title}</h4>
                                    </div>

                                    <div className='desc'>
                                        {this.state.showDesc ? <p>{movie.overview}</p> : null }
                                        <button onClick={()=> this.handleShowDesc()}> {this.state.showDesc ? "Ocultar descripcion" : "Ver descripcion"}</button>
                                    </div>

                                    <Link to={`/detalle/${movie.id}`}> <button>Ir a Detalle</button> </Link> 
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
        )
    }
}

export default SearchResults