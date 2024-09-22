import { Link } from "react-router-dom"
import SearchForm from "../SearchForm/SearchForm";

const Navebar = () => {
    return(
        <nav>
            <img src="./imagenes/logo.png" alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/cartelera">Cartelera</Link></li>
            </ul>
            <div>
                <SearchForm history= {props.history} />
            </div>
        </nav>
    )
}

export default Navebar