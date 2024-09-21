import React, { Component } from 'react'

class Favoritos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        const parsedArray = JSON.parse(Storage)
        // resuelve todas las promesas y despues muestra todo
        Promise.all ( 
            parsedArray.map((id) => {
                fetch('url de movie')
                    .then(response => response.json())
                    .then(movie => 
                        this.state({
                            movies: [...this.state.movies, movie] 
                        })  // nuevo array con lo que ya tenia movies mas la nueva
                    )
                    .catch((error) => console.log(error))
    
            })
        )
    }
    
    render() {
        return(
            <div> 
                { !this.state.isLoading ? <p>FAVORITOS</p> : <p>Cargando...</p> }
             </div>
        )
    }
}

export default Favoritos