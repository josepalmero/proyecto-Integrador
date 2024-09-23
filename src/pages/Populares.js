import VerTodas from "../components/VerTodas/VerTodas";

const Populares = () => {

    return(
        <>
            <h1>Peliculas Populares</h1>
            <VerTodas nombre={"Peliculas Populares"} url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d"} link={"/populares"}/>
        </>
    )

}

export default Populares 