import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import PokeCard from "./Components/Card/PokeCard";
import PokeLista from "./Components/Lista/PokeLista";

function App() {
  return (
    <div>
      <Navbar/>
      <PokeLista/>
    </div>
  );
}

export default App;
