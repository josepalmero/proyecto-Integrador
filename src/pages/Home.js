import SearchForm from "../components/SearchForm/SearchForm";

const Home = (props) => {

    return(
        <>
            <SearchForm history= {props.history} />
        </>
    )

}

export default Home