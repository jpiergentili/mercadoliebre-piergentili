import React from "react";

const ItemCount = ({initial, stock, onAdd}) =>{

    const [counter, setCounter] = React.useState(initial);
    const [itemStock, setItemStock] = React.useState(stock);

    const decrementarCantidad = (valor) => {
        if (valor >0){
            setCounter(valor);
        }        
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock){
            setCounter(valor);
        }
    }

    const agregarProductos = () =>{
        if (counter <= itemStock) {
            onAdd(counter); 
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter);
        }   
    }
      
    React.useEffect(() => {
            setItemStock(stock);
        }, [stock]);

        /* los corchetes de la linea siguiente se utilizan a modo de filtro, 
    para evitar que la actualizacion de los estados se ejecute todo el tiempo,
    poniendo los corchetes se ejecuta 1 sola vez al inicio */

    return (
        <div className="container py-5 img-medios-pago">
            <div className="card col-md-2">
                <div className="card-body">
                    <div className="input-group">
                        <input type="button" className="btn btn-secundary" value="-" onClick={() => { decrementarCantidad(counter - 1) }} />
                        <input type="text" className="form-control" value={counter} onChange={() => { }} />
                        <input type="button" className="btn btn-secundary" value="+" onClick={() => { incrementarCantidad(counter + 1) }} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-primary" value="Agregar" onClick={() => { agregarProductos() }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;

