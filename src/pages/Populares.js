import { Component } from "react";
import { options } from "../options"
import HomeMovies from "../components/HomeMovies/HomeMovies";


export class Populares extends Component {
    constructor(props){
        super(props);

        this.setState = {
            movies: [],
        }
    }

    ////API de populares 
    componentDidMount(){
       
        fetch("https://api.themoviedb.org/3/movie/popular", options) 
        .then((response) => response.json())
        .then((data) => {this.setState({ movies: data.results})})
        .catch((error) => console.log(error));
    }

    render(){
        return( 
          <div>
            <HomeMovies />
          </div>
        );
      };

}

export default Populares