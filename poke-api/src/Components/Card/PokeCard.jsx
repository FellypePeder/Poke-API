import React, { useEffect, useState } from "react";
import api from "../../api";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";

function PokeCard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("pokemon/").then((res) => {
      setPokemons(res.data.results);
    });
  });

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, key) => (
          <div className="col-12 col-md-4 card-poke" key={key}>
            <div className="conteudo-card text-center">
              <p className="nome-poke">{pokemon.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokeCard;
