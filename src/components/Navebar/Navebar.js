import { Link } from "react-router-dom"
import SearchForm from "../SearchForm/SearchForm";
import "./Navebar.css"

const Navebar = () => {
    return(
        <nav>
            <img src="./imagenes/logo.png" alt="" />
            <h1>Panda Movie</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/verTodas">Cartelera</Link></li>
                <li><Link to="/verTodas">Populares</Link></li>
            </ul>
            
        </nav>
        // <div> <SearchForm history= {props.history} /> </div> // tira error  'props'
    )
}

export default Navebar