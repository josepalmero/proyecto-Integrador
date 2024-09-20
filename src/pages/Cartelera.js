<<<<<<< HEAD
const Cartelera = () => {
    return(
        <div> Cartelera </div>
    )
=======
import { Component } from "react";
import { options } from "../options"

export class Cartelera extends Component {
    constructor(props){
        super(props);

        this.setState = {
            movies: [],
            isLoading: true
        }
    }

    ////API de cartelera 
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch("https://api.themoviedb.org/3/movie/now_playing", options) 
        .then((response) => response.json())
        .then((data) => {this.setState({ movies: data.results, isLoading: false })})
        .catch((error) => console.log(error));
    }

    render(){
        return( 
          <div>HomeMovies</div>
        );
      };

>>>>>>> e51cd032e3cdaf5b2d333b4cf1a9ffbc35b33d1e
}

export default Cartelera