import Favoritos from "../components/Favoritos/Favoritos"

const Favoritos = () => {
    return(
        <>
            <section>
                <article>
                    <h2> Favoritos </h2>
                    <div> 
                        { !this.state.isLoading ? <Favoritos/> : <p>Cargando...</p> }
                    </div>
                </article>
            </section>
        </>
    )
}

export default Favoritos