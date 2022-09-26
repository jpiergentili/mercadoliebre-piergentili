import React from "react";


import {useParams} from "react-router-dom";
import { getItemId } from "../CustomFetch";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () =>{

    const [item, setItem] = React.useState({});

    const {id} = useParams();

    React.useEffect(() => {

         /* cuando la promesa es resuelta correctamente con setItems 
         se actualiza el estado de Items con los valores de la respuesta, por lo tanto items=listaOfertas */
         getItemId(id).then((detalles) =>{
            setItem(detalles);
        });

        /* en caso de que la peticion al servidor salga fallida se ejecutara el metodo catch */
        getItemId(id).catch((error) =>{   
            console.log(error);
        });

        /* los corchetes de la linea siguiente se utilizan a modo de filtro, 
        para evitar que la actualizacion de los estados se ejecute todo el tiempo,
        poniendo los corchetes se ejecuta 1 sola vez al inicio */
        }, [id]); 

    return (
        <div className="row">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;