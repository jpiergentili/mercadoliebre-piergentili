import React from "react";
import { listaOfertas } from "../mock/listaOfertas";

import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () =>{
    const [item, setItem] = React.useState({});

    React.useEffect(() => {

        const getProduct = new Promise((resolve, reject) =>{



            const oferta = listaOfertas.find((o)=> o.id === 1);
            setTimeout(() =>{               //simulo una demora por parte del servidor de 2seg
                resolve(oferta);      //si la promesa se resuelve correctamete devuelve la lista de ofertas
            }, 2000);
        });

         /* cuando la promesa es resuelta correctamente con setItems 
         se actualiza el estado de Items con los valores de la respuesta, por lo tanto items=listaOfertas */
        getProduct.then((detalles) =>{   
            setItem(detalles);
        });

        /* en caso de que la peticion al servidor salga fallida se ejecutara el metodo catch */
        getProduct.catch((error) =>{   
            console.log(error);
        });

/* los corchetes de la linea siguiente se utilizan a modo de filtro, 
para evitar que la actualizacion de los estados se ejecute todo el tiempo,
poniendo los corchetes se ejecuta 1 sola vez al inicio */
    }, []); 

    return (
        <div className="row">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;