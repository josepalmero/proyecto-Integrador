import Cartelera from "./Cartelera";
import Populares from "./Populares";
import SearchForm from "../components/SearchForm/SearchForm";


const Home = (props) => {

    return(
        <>
            <SearchForm history= {props.history} />
            <Populares />
            <Cartelera />
        </>
        //// faltan las props 
    )

}

export default Home