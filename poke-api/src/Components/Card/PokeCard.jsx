import React, { useEffect, useState } from "react";
import api from "../../api";
import Modal from "react-bootstrap/Modal";

import { AiOutlineClose } from "react-icons/ai";
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
      console.log(res.data);
    });
  }, [url]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModalVis(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {pokeInfo !== undefined ? (
        <>
          <div className="conteudo-card col-lg-3 col-md-6 text-center">
            <div
              className="imagem"
              onClick={() => {
                setModalVis(true);
              }}
            >
              <p className="nome-poke">{letraMaiscula(pokeInfo.name)}</p>
              <img
                src={imgPoke + pokeInfo.id + ".png"}
                alt=""
                className="img-poke"
              />
            </div>
            <Modal
              show={modalVis}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  {letraMaiscula(pokeInfo.name) +
                    ", tipo: " +
                    letraMaiscula(pokeInfo.types[0].type.name) +
                    " " +
                    letraMaiscula(
                      pokeInfo.types.length == 2
                        ? pokeInfo.types[1].type.name
                        : " "
                    )}
                </Modal.Title>
                <Modal.Title onClick={() => setModalVis(false)}>
                  <AiOutlineClose className="icone-fechar" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Altura: {pokeInfo.height / 10 + "m"}</p>
                <p className="peso-poke">Peso: {pokeInfo.weight / 10 + "kg"}</p>
                <p className="ataque-poke">{letraMaiscula(pokeInfo.stats[1].stat.name)+": "+pokeInfo.stats[0].base_stat}</p>
              </Modal.Body>
            </Modal>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default PokeCard;
