import Navebar from "./components/Navebar/Navebar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import PaginaNotFound from "./pages/PaginaNotFound";

function App() {
  return (
    <>
      <Navebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/populares" component={Populares} />
        <Route path="/cartelera" component={Cartelera} />
        <Route path= "" component= {PaginaNotFound} /> 
      </Switch>

      <footer>
        <p>Serena Fabbian, Josefina Palmero y Belen Gutter Corsi</p>
      </footer>
    </>
  );
}

export default App;
