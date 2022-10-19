import React from "react";
import { Navbar } from '@mui/icons-material';
import PokeCard from "../Components/Card/PokeCard";

function Home() {
    return (
        <>
            <div className="container-fluid">
                <Navbar></Navbar>
                <PokeCard></PokeCard>
            </div>
        </>
    );
}
  
export default Home;