import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import PokeCard from "./Components/Card/PokeCard";

function App() {
  return (
    <div>
      <Navbar/>
      <PokeCard/>
    </div>
  );
}

export default App;
