import React, { Component }from 'react';

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <article>
                <div>
                    <img/>
                    <h1>Titulo</h1>
                    <p>Clasificacion: </p>
                    <p>Genero: </p>
                    <p>Fecha de estreo: </p>
                    <p>Duracion: </p>
                    <p>Sinopsis: </p>
                </div>
            </article>
            // agregar la posibilidad de agregar a favoritos
        )

    }
}

export default MovieDetail
