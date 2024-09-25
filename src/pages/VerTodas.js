import { Component } from 'react';
import { options } from "../options"


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
            moviesFiltered: this.state.movies.filter(movie => movie.title.includes(this.state.filterValue)) 
        })
    }

    render() {
        return(
            <div>

            </div>
        )
        
    }

}

export default VerTodas;