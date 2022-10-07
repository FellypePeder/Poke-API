import React from "react";
import { Navbar } from '@mui/icons-material';
import PokeCard from "../Components/Card/PokeCard";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <PokeCard></PokeCard>
        </div>
    );
}
  
export default Home;