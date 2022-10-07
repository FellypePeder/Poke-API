import React, { useEffect, useState } from "react";
import api from "../../api";
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css';

function PokeCard() {

  const [pokemons, setPokemons] = useState([])

  // const [tipo, setTipo] = useState("");
  // const [nome, setNome] = useState("")
  // const [peso, setPeso] = useState(0)
  // const [altura, setAltura] = useState(0)
  // const [img, setImg] = useState("")

  useEffect(() => {
    api.get("pokemon/")
    .then((res) => {
      setPokemons(res.data.results)
    })
    .catch((err) => console.log(err))
  })

  return (
    <div className="row"> 
      {
        pokemons.map((pokemon) => (
          <div className="col-12 col-md-3">
            <div className='text-center'>
              <p></p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
  
export default PokeCard;