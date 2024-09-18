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
        return(

            <div> SearchResults {this.props.location.state.query} </div>

        )
    }
}

export default SearchResults