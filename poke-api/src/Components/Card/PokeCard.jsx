import React, { useEffect, useState } from "react";
import api from "../../api";
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css';

function PokeCard() {

  const [nome, setNome] = useState("")
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [img, setImg] = useState("")
  const [tipo, setTipo] = useState("");

  useEffect(() => {
    api.get("pokemon/pikachu")
    .then((res) => {
      setNome(res.data.name)
      setPeso(res.data.weight)
      setAltura(res.data.height)
      setImg(res.data.sprites.front_default);
      setTipo(res.data.types[0].type.name);
      console.log(res)
    })
  })

  return (
  <>
    <div className="row">
      <div className="col-12 col-md-3">
        <div className='card-prod'>
          <div className='text-center'>
            <img src={img} alt=""/>
          </div>
          <p className='nome'>{nome[0].toUpperCase() + nome.substring(1)}</p>
          <p className='peso'>{peso}</p>
          <p className='altura'>{altura}</p>
          <p className='tipo'>{tipo[0].toUpperCase() + tipo.substring(1)}</p>
        </div>
      </div>
    </div>
    </>
  );
}
  
export default PokeCard;