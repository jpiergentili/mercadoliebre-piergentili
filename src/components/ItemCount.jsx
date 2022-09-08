import React from "react";
import ofertaTV from "./images/Oferta-TV.png";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [cantidad, setCantidad] = React.useState(initial);
    const [itemStock, setItemStock] = React.useState(stock);
    const [itemAdd, setItemAdd] = React.useState(onAdd);

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

    return (
        <div className="container py-5 img-medios-pago">
            <div className="card col-md-2">
                <img src={ofertaTV} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="text-center">TV CoderSmart</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secundary" value="-" onClick={() =>
                            {decrementarCantidad(cantidad - 1)}} />                    
                        <input type="text" className="form-control" value={cantidad} onChange={() =>{}}/>
                        <input type="button" className="btn btn-secundary" value="+" onClick={() =>
                            {incrementarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-primary" value="Agregar" onClick={() =>
                            {agregarProductos()}} />
                    </div>
                    <p>Productos seleccionados: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;