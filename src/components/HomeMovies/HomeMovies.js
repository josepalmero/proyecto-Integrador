import React, { Component } from "react";
import { options } from "../options"

class HomeMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: " "
    }
  }

  ////API de populares 
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then( response => response.json() )
      .then( data => console.log(data) )   
      .catch( error => console.log(error) );
  }

  render(){
    return( 
      <div>HomeMovies</div>
    );
  };

  ///no estoy segura si van el el mismo lo de populares y cartelera 


  ////API de cartelera 
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/now_playing", options)
      .then( response => response.json() )
      .then( data => console.log(data) )   
      .catch( error => console.log(error) );
  }

  render(){
    return( 
      <div>HomeMovies</div>
    );
  };

}

export default HomeMovies

