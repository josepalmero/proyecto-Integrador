import { Component } from 'react';
import { options } from "../options"
import HomeMovies from "../components/HomeMovies/HomeMovies";


class VerTodas extends Component {
    constructor(props) {
        super(props)
        this.state = {
          movies: [],
          moviesFiltered: [],
          isLoading: true,
        }
      }    

    componentDidMount() {
        this.setState({
            isLoading: true
          })
      
          const url = this.props.url
      
          fetch(url, options)
            .then((response) => response.json())
            .then((data) => { this.setState({ movies: data.results, moviesFiltered: data.results }) })
            .catch((error) => console.log(error));
      
          this.setState({
            isLoading: false
          })    
    }

    handleFilterChange() {
        this.setState({
            moviesFiltered: this.state.movies.filter(movie => movie.title.includes(this.state.filterValue)) //movies figura como not defined(?)
        })
    }

    render() {
        return(
            <div>

            </div>
        )
            //incluir form para filtrar
            //incluir boton ver mas
    }

}

export default VerTodas;