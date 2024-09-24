import React from "react";
import VerTodas from "../components/VerTodas/VerTodas";

const Cartelera = () => {

    return(
        <>
            <h1>Peliculas En Cartelera</h1>
            <VerTodas nombre={"Peliculas En Cartelera"} url={"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d"} link={"/cartelera"}/>
        </>
    )

}

export default Cartelera 