import React from "react";

import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Ofertas = () =>{
    return (
        <>            
            {/* DIV PARA ENTREGABLE N°5 - CREACION DE LISTA EN EL MAIN */}
            <div className="container">                
                    <ItemListContainer />                
            </div>

            <div className="container">          
                   <ItemDetailContainer />   
            </div>
        </>
    )
}

export default Ofertas;