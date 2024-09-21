import { Component } from 'react'

class Pelicula extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if(storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
            this.setState({esFavorito: estaEnFavoritos})
        }
    }

    agregarFavorito() {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
        }


    }
  
    render(){
        return (
            <div>Pelicula</div>
        )
    }
}

export default Pelicula
