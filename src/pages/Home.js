import Cartelera from "./Cartelera";
import Populares from "./Populares";
import SearchForm from "../components/SearchForm/SearchForm";


const Home = (props) => {

    return(
        <>
            <Cartelera/>
            <Populares/>
            <SearchForm history= {props.history} />
        </>
    )

}

export default Home