import React, { useEffect, useState } from "react";
import api from "../../api";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import PokeCard from "../Card/PokeCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function PokeLista() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setPokemons(res.data.results);
    });
  });

  return (
    <>
      <div className="container">
        <div className="row gx-3 justify-content-center">
          <div className="text-center botoes">
            <button className="col-md-4 botao-anterior">
              <FaAngleLeft />
            </button>
            <button className="col-md-4 botao-proximo">
              <FaAngleRight />
            </button>
          </div>
          {pokemons.map((e) => (
            <PokeCard url={e.url} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PokeLista;
