import { Component } from 'react';

export class SearchResults extends Component {
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
        fetch(``) //api
        .then((response) => response.json())
        .then((data) => {this.setState({ movies: data.results, isLoading: false })})
        .catch((error) => console.log(error));
    }

    render(){

        let contenido;

        if (this.state.movies == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <> {this.props.location.state.query} </>
        }

        return(

            <div>
                {contenido}
            </div>

        )
    }
}

export default SearchResults