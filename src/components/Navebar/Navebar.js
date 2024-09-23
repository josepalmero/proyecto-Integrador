import React from "react"
import { Link } from "react-router-dom"
import "./Navebar.css"

const Navebar = () => {
    return(
        <nav>
            <Link to={"/"}> <img src="./imagenes/logo.png" alt="logo" /> </Link>
            <h1>Panda Movie</h1>
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