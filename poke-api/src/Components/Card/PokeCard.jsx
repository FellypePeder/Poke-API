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
          <div className="conteudo-card col-lg-3 col-md-6 text-center d-flex justify-content-center">
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
              className="modal"
            >
              <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                  {letraMaiscula(pokeInfo.name) +
                    ", tipo: " +
                    letraMaiscula(pokeInfo.types[0].type.name) +
                    " " +
                    letraMaiscula(
                      pokeInfo.types.length == 2
                        ? " e " + pokeInfo.types[1].type.name
                        : " "
                    )}
                </Modal.Title>
                <Modal.Title onClick={() => setModalVis(false)}>
                  <AiOutlineClose className="icone-fechar" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <div className="poke-info">
                  <div className="poke-image">
                    <img
                      src={imgPoke + pokeInfo.id + ".png"}
                      alt=""
                      className="img-poke"
                    />
                  </div>

                  <div className="info-direita align-middle">
                    <div className="info-geral">
                      <h2 className="">Informações gerais</h2>
                      <p>Altura: {pokeInfo.height / 10 + "m"}</p>
                      <p className="peso-poke">
                        Peso: {pokeInfo.weight / 10 + "kg"}
                      </p>
                    </div>
                    <div className="info-luta">
                      <h2>Luta</h2>
                      <p className="hp-poke">
                        {"HP: " + pokeInfo.stats[0].base_stat + "PV"}
                      </p>
                      <p className="ataque-poke">
                        {"Ataque: " + pokeInfo.stats[1].base_stat + "PA"}
                      </p>
                      <p className="defesa-poke">
                        {"Defesa: " + pokeInfo.stats[2].base_stat + "PD"}
                      </p>
                      <p className="ataque-especial-poke">
                        {"Ataque especial: " + pokeInfo.stats[3].base_stat + " pontos de ataque especial"}
                      </p>
                      <p className="defesa-especial-poke">
                        {"Defesa especial: " + pokeInfo.stats[4].base_stat + " pontos de defesa especial"}
                      </p>
                      <p className="velocidade-poke">
                        {"Velocidade: " + pokeInfo.stats[5].base_stat + " pontos de velocidade"}
                      </p>
                      <h2>Habilidade</h2>
                      <p className="habilidade-poke">
                        {"Habilidades: " +
                          letraMaiscula(pokeInfo.abilities[0].ability.name) +
                          letraMaiscula(
                            pokeInfo.abilities.length == 2
                              ? " e " + pokeInfo.abilities[1].ability.name
                              : " "
                          )}
                      </p>
                    </div>
                  </div>
                </div>
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
