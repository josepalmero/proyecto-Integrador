import React from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./VerTodas.css"

const VerTodas = (props) => {
    return(
        <div className="peliculas-container">
            {props.movies.map((movie) => <Pelicula infoMovie={movie} key={movie.id} />)}
        </div>
    )
}

export default VerTodas