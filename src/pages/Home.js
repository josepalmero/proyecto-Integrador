import HomeMovies from "../components/HomeMovies/HomeMovies";


const Home = () => {

    return(
        <>
            <h1>Peliculas Populares</h1>
            <HomeMovies nombre={"Peliculas Populares"} url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d"} link={"/populares"}/>
            <h1>Peliculas en Cartelera</h1>
            <HomeMovies nombre={"Peliculas En Cartelera"} url={"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=2e1ba77b764a76e2e48e86179135ae4d"} link={"/cartelera"}/>
        </>
    )

}

export default Home