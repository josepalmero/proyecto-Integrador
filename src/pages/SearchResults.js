import { Component } from 'react';

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
        return(
            <>
                <div>
                    <h2> Resultados de busqueda: {this.props.location.state.query} </h2>
                    {/* {!this.state.isLoading ? {this.props.location.state.query} : <p>Cargando...</p>} */}
                </div>
            </>

            

            // deberia ser la opcion de abajo creo pero tira error !!! --> preguntar

        )
    }
}

export default SearchResults