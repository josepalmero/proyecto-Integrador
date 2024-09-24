import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Navebar.css";

const Navebar = (props) => {
    return(
        <nav className="nav">
            <Link to={"/"}> <img className= "logo" src="./imagenes/logo.png" alt="logo" /> </Link>
            <h1>Panda Movie</h1>
            <SearchForm history= {props.history} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/cartelera">Cartelera</Link></li>
                <li><Link to="/populares">Populares</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navebar