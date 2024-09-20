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
        .then((data) => {this.setState({ movies: data.results })})
        .catch((error) => console.log(error));
        this.setState({
            isLoading: false
        })
    }

    render(){


        return(

            <div>
                {/* {!this.state.isLoading ? {this.props.location.state.query} : <p>Cargando...</p>} */}
                Search Results {this.props.location.state.query}
            </div>

        )
    }
}

export default SearchResults