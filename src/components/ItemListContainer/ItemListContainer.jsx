import React from "react";
import {useParams} from "react-router-dom";
import { getItemsList } from "../CustomFetch";

import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const [items, setItems] = React.useState([]);

    const {categoryId} = useParams();

    React.useEffect(() => {    

        getItemsList(categoryId).then((respuesta) =>{   
                setItems(respuesta);
            });
    
            /* en caso de que la peticion al servidor salga fallida se ejecutara el metodo catch */
        getItemsList(categoryId).catch((error) =>{   
            console.log(error);
        });
    


/* los corchetes de la linea siguiente se utilizan a modo de filtro, 
para evitar que la actualizacion de los estados se ejecute todo el tiempo,
poniendo los corchetes se ejecuta 1 sola vez al inicio */
    }, [categoryId]); 

    return (
        <div className="row">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
