import Navebar from "./components/Navebar/Navebar";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import FavoritosPage from "./pages/FavoritosPage";
import Detalle from "./pages/Detalle";
import PaginaNotFound from "./pages/PaginaNotFound";
import SearchResults from "./pages/SearchResults";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";


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

      </main>

      <Footer />

    </>
  );
}

export default App;
