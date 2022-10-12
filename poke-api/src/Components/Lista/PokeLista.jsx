import React, { useEffect, useState } from "react";
import api from "../../api";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import PokeCard from "../Card/PokeCard";

function PokeLista() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setPokemons(res.data.results);
      // console.log(res.data.results);
    });
  });

  return (
    <div className="row area">
      {pokemons.map((e, key) => (
        <div key={key}>
          <PokeCard url={e.url} />
        </div>
      ))}
    </div>
  );
}

export default PokeLista;
