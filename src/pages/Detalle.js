import React, {Component} from 'react';
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
      <div>
        <MovieDetail id={this.state.id} />
      </div>
         
      
    )
  }

}

export default Detalle
