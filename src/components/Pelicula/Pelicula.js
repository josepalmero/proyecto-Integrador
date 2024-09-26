import { Component } from 'react'
import "./Pelicula.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class Pelicula extends Component {

    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            showDesc: false,
            infoMovie: null
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
            parsedArray.push(this.props.infoMovie.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerPelicula = [this.props.movie.id]
            const stringArray = JSON.stringify(primerPelicula)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({ esFavorito: true })
    }

    sacarFavoritos(id){
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(favId => favId !== this.props.infoMovie.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({ 
            esFavorito: false 
        })
    }

    handleShowDesc(){
        this.setState({
          showDesc: !this.state.showDesc
        })
    }
  
    render(){
        const { id, poster_path, title, overview } = this.props.infoMovie ?? {}

        return (
            
            <article> 
                <div>
                    <section className='pelicula-container'>

                        <div>
                            <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} className='img'/>
                        </div>

                        <div className='titulo'>
                            <h4>{title}</h4>
                        </div>

                        <div className='desc'>
                            {this.state.showDesc ? <p>{overview}</p> : null }
                             <button onClick={()=> this.handleShowDesc()}> {this.state.showDesc ? "Ocultar descripcion" : "Ver descripcion"}</button>
                        </div>

                        <Link to={`/detalle/${id}`}> <button>Ir a Detalle</button> </Link> 

                        <div className='desc'>
                            <button onClick = {() => !this.state.esFavorito ? this.agregarFavoritos(id) : this.sacarFavoritos(id)}>
                                {!this.state.esFavorito ? 'Agregar a favoritos' : 'Sacar de favoritos'}
                            </button>
                        </div>
  
                    </section>
                </div>
            </article>
        )
    }
}

export default Pelicula
