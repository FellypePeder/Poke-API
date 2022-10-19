import React, { useEffect, useState } from "react";
import api from "../../api";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

function PokeCard({url}) {
  const [pokeInfo, setPokeInfo] = useState();

  let imgPoke = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  const letraMaiscula = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    api.get(url)
    .then((res) => {
      setPokeInfo(res.data);
    });
  },[url]);

  return (
    <>
      <div className="conteudo-card col-lg-3 col-md-6 text-center">
        <div className="imagem">
          <p className="nome-poke">{letraMaiscula(pokeInfo.name)}</p>
          <img src={imgPoke + pokeInfo.id +".png"} alt="" className="img-poke"/>
        </div>
        <p className="peso-poke">Altura: {pokeInfo.height}</p>
      </div>
    </>
  );
}

export default PokeCard;