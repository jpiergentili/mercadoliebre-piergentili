import React from "react";
import Carrusel from "./carrusel/Carrusel";
import ItemListContainer from "./ItemListContainer";

const Inicio = () =>{
    return (
        <>
            <Carrusel />

            <div className="container">                
                    <ItemListContainer />                
            </div>

        </>
    )
}

export default Inicio;