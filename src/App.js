import Navebar from "./components/Navebar/Navebar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Favoritos from "./pages/Favoritos";
import VerTodas from "./pages/VerTodas";
import Detalle from "./pages/Detalle";
import PaginaNotFound from "./pages/PaginaNotFound";

function App() {
  return (
    <>
      <Navebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/verTodas" component={VerTodas} />
        <Route path="/detalle/id/:id" component={Detalle} />
        <Route path= "" component= {PaginaNotFound} /> 
      </Switch>

      <footer>
        <p>Serena Fabbian, Josefina Palmero y Belen Gutter Corsi</p>
      </footer>
    </>
  );
}

export default App;
