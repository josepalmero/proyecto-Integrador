import {Component} from 'react';
import MovieDetail from '../components/Detalle/MovieDetail';

class Detalle extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: props.match.params.id
    }
  }

  render() {
    return(
      <>
         <MovieDetail id= {this.state.id} />
      </>
    )
  }

}

export default Detalle
