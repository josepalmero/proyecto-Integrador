import React, { Component } from 'react';
import Favoritos from '../components/Favoritos/Favoritos';

class FavoritosPage extends Component {
  
   render() {
       return(
           <div>
                <h1 className="titulo-favs">Tus Películas Favoritas</h1>
                < Favoritos/>
            </div>
        )
    }
}


export default FavoritosPage