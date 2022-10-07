import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div class="container align-items-center">
      <div class="row" id="row-pokecard">
        <div class="col-md-12 container-texto">
          <p className="texto">Selecione seu pokemón!</p>
          <section className="pesquisa">
            <input type="text" placeholder="Nome do pokemon" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
