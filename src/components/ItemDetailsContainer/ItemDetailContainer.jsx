import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {useParams} from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const {id} = useParams();

    const [item, setItem] = React.useState({});

    React.useEffect(() => {


        const db = getFirestore();

        //Almaceno la respuesta de la base de datos en una constante
        const response = doc(db, "productos", id);

        //Al utilizar la función getDoc() se obtiene como respuesta una promesa
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {   //El metodo exists() devuelve true/false si el id consultado en la linea 19 existe
                setItem({id:snapShot.id, ...snapShot.data()}); //con esto lo que hago combinar los datos del producto con la id aleatoria que no forma parte de los datos del producto
            }
        });
    }, [id]);


    return (
        <div className="row">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;