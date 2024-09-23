import { Component } from 'react'
import "./Pelicula.css"

class Pelicula extends Component {

    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            showExtra: false,
            showDesc:false
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if(storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
            this.setState({ esFavorito: estaEnFavoritos })
        }
    }

    agregarFavoritos() {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.movie.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerPelicula = [this.props.movie.id]
            const stringArray = JSON.stringify(primerPelicula)
            localStorage.setItem('favoritos', stringArray)
        }
        this.state({
            esFavorito: true
        })
    }

    sacarFavoritos(){
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
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
        const { id, img, nombre, descripcion, extra } = this.props.pelicula
        return (
            
            <article className='pelicula-container'> 
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />
                    <h4>Titulo pelicula</h4>
                    <p>Datos pelicula</p>
                </div>

                <button onClick={()=> this.handleShowDesc()}> {this.state.showDesc ? "Ocultar descripcion" : "Ver descripcion"} </button>
                
                <button onClick={()=> this.handleShowExtra()}> {this.state.showExtra ? "Ocultar extra" : "Ver extra"} </button>
                

                <button onClick = {() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                    {!this.state.esFavorito ? 'Agregar a favoritos' : 'Sacar de favoritos'}
                </button>

            </article>
        )
    }
}

export default Pelicula
