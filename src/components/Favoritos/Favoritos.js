import React, { Component } from 'react';

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
        <div> Favoritos </div>
    )
  }
}

export default Favoritos;