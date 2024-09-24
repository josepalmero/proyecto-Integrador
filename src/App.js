import Navebar from "./components/Navebar/Navebar";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import FavoritosPage from "./pages/FavoritosPage";
import Detalle from "./pages/Detalle";
import PaginaNotFound from "./pages/PaginaNotFound";
import SearchResults from "./pages/SearchResults";
import HomeMovies from "./components/HomeMovies/HomeMovies";
import Populares from "./components/VerTodas/VerTodas";
import Cartelera from "./components/VerTodas/VerTodas";


function App() {
  return (
    <>
    
      <Navebar />

      <main>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/favoritos" component = {FavoritosPage} />
          <Route path="/populares" component = {Populares} />
          <Route path="/cartelera" component = {Cartelera} />
          <Route path="/detalle/:id" component = {Detalle} />
          <Route path= "/search" component = {SearchResults} /> 
          <Route path= "" component = {PaginaNotFound} /> 
        </Switch>

        <HomeMovies />

      </main>

      <Footer />

    </>
  );
}

export default App;
