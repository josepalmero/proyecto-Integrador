import { Component } from "react";
import { options } from "../options"

export class Populares extends Component {
    constructor(props){
        super(props);

        this.setState = {
            movies: [],
            isLoading: true
        }
    }

    ////API de populares 
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch("https://api.themoviedb.org/3/movie/popular", options) 
        .then((response) => response.json())
        .then((data) => {this.setState({ movies: data.results, isLoading: false })})
        .catch((error) => console.log(error));
    }

    render(){
        return( 
          <div>HomeMovies</div>
        );
      };

}

export default Populares