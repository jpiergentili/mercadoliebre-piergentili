import React from "react";
import { listaOfertas } from "../mock/listaOfertas";
import ItemList from "./ItemList";

const ItemListContainer = (props) =>{

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {       

        const getProducts = new Promise((resolve, reject) =>{
            setTimeout(() =>{               //simulo una demora por parte del servidor de 2seg
                resolve(listaOfertas);      //si la promesa se resuelve correctamete devuelve la lista de ofertas
            }, 2000);
        });

         /* cuando la promesa es resuelta correctamente con setItems 
         se actualiza el estado de Items con los valores de la respuesta, por lo tanto items=listaOfertas */
        getProducts.then((respuesta) =>{   
            setItems(respuesta);
        });

        /* en caso de que la peticion al servidor salga fallida se ejecutara el metodo catch */
        getProducts.catch((error) =>{   
            console.log(error);
        });

/* los corchetes de la linea siguiente se utilizan a modo de filtro, 
para evitar que la actualizacion de los estados se ejecute todo el tiempo,
poniendo los corchetes se ejecuta 1 sola vez al inicio */
    }, []); 

    return (
        <div className="row">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
