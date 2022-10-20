import React, { useEffect, useState } from "react";
import api from "../../api";

import Modal from "../Modal/DetalheModal";

import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

function PokeCard({ url }) {
  const [pokeInfo, setPokeInfo] = useState();
  const [modalVis, setModalVis] = useState(false);

  let imgPoke =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  const letraMaiscula = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    api.get(url).then((res) => {
      setPokeInfo(res.data);
    });
  }, [url]);

  return (
    <>
      <div className="conteudo-card col-lg-3 col-md-6 text-center">
        <div className="imagem">
          <p className="nome-poke">{letraMaiscula(pokeInfo.name)}</p>
          <img src={imgPoke + pokeInfo.id +".png"} onClick={() => setModalVis(true)} alt="" className="img-poke"/>
        </div>
        <p className="peso-poke">Altura: {pokeInfo.height}</p>
        <button onClick={() => setModalVis(true)}>Ver mais detalhes</button>
      </div>
        {modalVis ? (
          <Modal onClose={() => setModalVis(false)}>
            <h2>Detalhes pokemon</h2>
          </Modal>
        ) : null}
    </>
  );
}

export default PokeCard;
