import React from "react";
import Pelicula from "../Pelicula/Pelicula";

const VerTodas = (props) => {
    return(
        <div>
            <section className="verTodas-container">
            {props.movies.map((movie) => <Pelicula infoMovie={movie} key={movie.id} />)}
            </section>
        </div>
    )
}

export default VerTodas