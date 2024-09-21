import SearchForm from "../components/SearchForm/SearchForm";
import HomeMovies from "../components/HomeMovies/HomeMovies";


const Home = () => {

    return(
        <>
            <SearchForm history= {props.history} />
            <h1>Peliculas Populares</h1>
            <HomeMovies nombre={"Peliculas Populares"} url={"https://api.themoviedb.org/3/movie/popular"} link={"/verTodas"}/>
            <h1>Peliculas En Cartelera</h1>
            <HomeMovies nombre={"Peliculas En Cartelera"} url={"https://api.themoviedb.org/3/movie/now_playing"} link={"/verTodas"}/>
        </>
    )

}

export default Home