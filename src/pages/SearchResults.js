import { Component } from 'react';

class SearchResults extends Component {
    constructor(props){
        super(props);

        this.setState = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=6d74e7317f9a497bee146a3eed86d6f7`)
        .then((response) => response.json())
        .then((data) => {this.setState({ movies: data.results })})
        .catch((error) => console.log(error));
        this.setState({
            isLoading: false
        })
    }

    render(){
        return(

            <div>
                Search Results {this.props.location.state.query}
                {/* {!this.state.isLoading ? {this.props.location.state.query} : <p>Cargando...</p>}  */} 
            </div>

            // deberia ser la opcion de abajo creo pero tira error !!! --> preguntar

        )
    }
}

export default SearchResults