import React, { Component } from 'react';
import "./Favoritos.css"

class Favoritos extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    //logica del codigo 

    this.setState({
      isLoading: false
    })

  }
  
  render(){
    return(
      <>

        {!this.state.isLoading ? <div> Favoritos </div> : <p className='loader'>Cargando...</p>}
      
      </>
    )
  }
}

export default Favoritos;