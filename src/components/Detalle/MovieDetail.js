import React, { Component } from 'react';
import "./MovieDetail.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class MovieDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: null,
            isLoading: true,
            esFavorito: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        })

        const { id } = this.props;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e1ba77b764a76e2e48e86179135ae4d`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movie: data,
                    isLoading: false
                });

                const storage = localStorage.getItem('favoritos')
                if (storage) {
                    const parsedArray = JSON.parse(storage)
                    const estaEnFavoritos = parsedArray.includes(data.id)
                    this.setState({
                        esFavorito: estaEnFavoritos
                    });
                }
            })
            .catch((error) => console.log(error));
    }

    agregarFavoritos(id) {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            if (!parsedArray.includes(id)) {
                parsedArray.push(id)
                const stringArray = JSON.stringify(parsedArray)
                localStorage.setItem('favoritos', stringArray)
                this.setState({ esFavorito: true })
            }
        } else {
            const primerPelicula = [this.props.movie.id]
            const stringArray = JSON.stringify(primerPelicula)
            localStorage.setItem('favoritos', stringArray)
            this.setState({ esFavorito: true })
        }
    }

    sacarFavoritos(id) {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            const favoritosRestantes = parsedArray.filter(favId => favId !== id)
            const stringArray = JSON.stringify(favoritosRestantes)
            localStorage.setItem('favoritos', stringArray)
            this.setState({ esFavorito: false })
        }
    }


    render() {
        const { movie, isLoading, esFavorito } = this.state

        if (isLoading) {
            return <p className='cargando'>Cargando...</p>
        }

        const { poster_path, title, genres, release_date, runtime, overview, id, vote_average } = movie

        return (
            <article className="movie-detail-container">
                <section className='movie-detail'>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} className='img' />
                    <h2 >Título: {title}</h2>
                    <p>Géneros: {genres.map((genre) => genre.name).join(', ')}</p>
                    <p>Fecha de estreno: {release_date}</p>
                    <p>Duración: {runtime} minutos</p>
                    <p>Calificación: {vote_average} </p>
                    <p>Sinopsis: <p className='sinopsis'>{overview}</p></p>

                    <div>
                        <button onClick={() => !esFavorito ? this.agregarFavoritos(id) : this.sacarFavoritos(id)} className='boton-fav'>
                            {esFavorito ? <FaHeart size={20} style={{ color: 'red' }}/> : <FaRegHeart size={20}/>}
                        </button>
                    </div>


                </section>
            </article>
        )

    }
}

export default MovieDetail
