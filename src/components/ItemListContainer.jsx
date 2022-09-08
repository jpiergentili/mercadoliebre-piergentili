import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) =>{

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {       

        const listaOfertas = [
            {'id':1, 'tittle':'Televisor', 'description':'Televisor CoderSmart 32"','price':38.799, 'pictureUrl':'https://drive.google.com/uc?id=1LQ5EZa-aRUllnnw7Q86AuIN5YinmpDKZ'},
            {'id':1, 'tittle':'Colchon', 'description':'Conchon CoderSleep','price':33.027, 'pictureUrl':'https://drive.google.com/uc?id=1slTy0LQ7EPJXyY-zcIv78kNdocgvNQLO'},
            {'id':1, 'tittle':'Bicicleta', 'description':'Bicicleta RallyReact','price':45.649, 'pictureUrl':'https://drive.google.com/uc?id=1kwH5x5e02cKXXR4_4UrsHmfY8uPOusnS'},
            {'id':1, 'tittle':'Auriculares', 'description':'Auriculares DeepCoding','price':13.999, 'pictureUrl':'https://drive.google.com/uc?id=1ZOXFdTiKoESIHv0NGZeYR2_b877LwNWP'},
            {'id':1, 'tittle':'Filtro', 'description':'Filtro p/pileta FrontEndDev','price':11.499, 'pictureUrl':'https://drive.google.com/uc?id=1jSIEEsFOxWoVUq9hIDkStYkWHg29raAa'}
        ];

        const promesa = new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(listaOfertas);
            }, 2000);
        });

        promesa.then((respuesta) =>{
            setItems(respuesta);
        });

    }, []);

    return (
        <div className="container centrar-objetos">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
