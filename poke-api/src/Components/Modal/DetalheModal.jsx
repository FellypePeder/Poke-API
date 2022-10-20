import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function DetalhesPoke({ id = "modal", onClose = () => {}, children }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <div id={id} className="detalhes-poke" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>
          Fechar
        </button>
        <div className="conteudo">{children}</div>
      </div>
    </div>
  );
}

export default DetalhesPoke;
