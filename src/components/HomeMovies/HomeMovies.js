import React, { Component } from "react";


class HomeMovies extends Component {
  
  constructor(props){
    super(props)
    this.state = {

    }}

    render(){
      const {id, img,  nombre, descripcion } = this.props.pelicula

        return (
          <div>

            <h1>Populares</h1>
            <article>
              <img src= {`https://image.tmdb.org/t/p/w342/${img}`} alt= {nombre}/>
              <h1>Nombre: {nombre}</h1>
              <p>Descripcion: {descripcion}</p>
            </article>
            
            <h1>Cartelera</h1>
            <article>
              <img src= {`https://image.tmdb.org/t/p/w342/${img}`} alt= {nombre}/>
              <h1>Nombre: {nombre}</h1>
              <p>Descripcion: {descripcion}</p>
            </article>
          </div>
          
            ///boton ver descrpcion
            ///boton ir a detalle
            ///boton agregar a favoritos 
        )

    }

}

export default HomeMovies
