import { Component } from 'react'
import "./Pelicula.css"

class Pelicula extends Component {

    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            showExtra: false,
            showDesc: false
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if(storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.infoMovie.id)
            this.setState({ esFavorito: estaEnFavoritos })
        }
    }

    agregarFavoritos(id) {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            parsedArray.push(id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerPelicula = [id]
            const stringArray = JSON.stringify(primerPelicula)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFavoritos(id){
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({ 
            esFavorito: false 
        })
    }

    handleShowExtra(){
        this.setState({
          showExtra: !this.state.showExtra
        })
    }
    handleShowDesc(){
        this.setState({
          showDesc: !this.state.showDesc
        })
    }
  
    render(){
        const { id, poster_path, title, overview } = this.props.infoMovie
        return (
            
            <article className='pelicula-container'> 
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
                    <h4>{title}</h4>
                </div>


                {this.state.showDesc ? <p>{overview}</p> : null }
                

                <button onClick={()=> this.handleShowDesc()}> {this.state.showDesc ? "Ocultar descripcion" : "Ver descripcion"}</button>
                
                <button onClick={()=> this.handleShowExtra()}> {this.state.showExtra ? "Ocultar extra" : "Ver extra"} </button>
                

                <button onClick = {() => !this.state.esFavorito ? this.agregarFavoritos(id) : this.sacarFavoritos(id)}>
                    {!this.state.esFavorito ? 'Agregar a favoritos' : 'Sacar de favoritos'}
                </button>

            </article>
        )
    }
}

export default Pelicula
