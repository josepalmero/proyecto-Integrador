import Navebar from "./components/Navebar/Navebar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Favoritos from "./pages/Favoritos";
import VerTodas from "./pages/VerTodas";
import Detalle from "./pages/Detalle";
import PaginaNotFound from "./pages/PaginaNotFound";
import SearchResults from "./pages/SearchResults";
import HomeMovies from "./components/HomeMovies/HomeMovies";

function App() {
  return (
    <>
      <Navebar />
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/favoritos" component = {Favoritos} />
        <Route path="/verTodas" component = {VerTodas} />
        <Route path="/detalle/id/:id" component = {Detalle} />
        <Route path= "/search" component = {SearchResults} /> 
        <Route path= "" component = {PaginaNotFound} /> 
      </Switch>
      
      <HomeMovies />

      <footer>
        <p>Serena Fabbian, Josefina Palmero y Belen Gutter Corsi</p>
      </footer>
    </>
  );
}

export default App;
