import Cartelera from "./Cartelera";
import Populares from "./Populares";
import SearchForm from "../components/SearchForm/SearchForm";
import Cartelera from "./Cartelera"; /// de pages ???
import Populares from "./Populares"; /// de pages ???

const Home = (props) => {

    return(
        <>
            <Cartelera/>
            <Populares/>
            <SearchForm history= {props.history} />
            <Populares />
            <Cartelera />
        </>
    )

}

export default Home