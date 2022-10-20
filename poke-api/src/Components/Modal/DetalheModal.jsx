import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";

const Modal = ({ id = "detalhes-poke", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="detalhes-poke" onClick={handleOutsideClick}>
      <div className="container">
        <button className="fechar" onClick={onClose} />
        <div className="conteudo">{children}</div>
      </div>
    </div>
  );
};

export default Modal;