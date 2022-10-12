import React, { useEffect, useState } from "react";
import api from "../../api";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

function PokeCard({url}) {
  const [pokeInfo, setPokeInfo] = useState();

  let imgPoke = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  useEffect(() => {
    api.get(url)
    .then((res) => {
      setPokeInfo(res.data);
      // console.log(res.data.id);
    });
  },[url]);

  return (
    <div className="card-poke">
      <div className="conteudo-card text-center">
        <div className="imagem">
          <img src={imgPoke + pokeInfo.id +".png"} alt="" className="img-poke"/>
        </div>
        <p className="nome-poke">{pokeInfo.name}</p>
        <p className="peso-poke">{pokeInfo.height}</p>
      </div>
    </div>
  );
}

export default PokeCard;