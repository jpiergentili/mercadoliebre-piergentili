import React from "react";

import {useParams} from "react-router-dom";
import { getItemId } from "./CustomFetch";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [cantidad, setCantidad] = React.useState(initial);
    const [itemStock, setItemStock] = React.useState(stock);
    const [itemAdd, setItemAdd] = React.useState(onAdd);

    const {id} = useParams();

    const decrementarCantidad = (valor) => {
        if (valor >0){
            setCantidad(valor);
        }        
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock){
            setCantidad(valor);
        }
    }

    const agregarProductos = () =>{
        if (itemStock > 0) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }
      
    React.useEffect(() => {

        getItemId(id).then((detalles) =>{   
           setItemStock(detalles.stock);
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
        <div className="container py-5 img-medios-pago">
            <div className="card col-md-2">
                <div className="card-body">
                    <div className="input-group">
                        <input type="button" className="btn btn-secundary" value="-" onClick={() => { decrementarCantidad(cantidad - 1) }} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => { }} />
                        <input type="button" className="btn btn-secundary" value="+" onClick={() => { incrementarCantidad(cantidad + 1) }} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-primary" value="Agregar" onClick={() => { agregarProductos() }} />
                    </div>
                    <p>Productos seleccionados: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;

