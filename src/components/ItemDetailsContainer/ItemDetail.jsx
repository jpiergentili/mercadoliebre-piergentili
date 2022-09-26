import React from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";

import { CartContext } from "../Context/Context";

const ItemDetail = ({item}) => {

    const {addItem} = React.useContext(CartContext);
    const [counter, setCounter] = React.useState(0);

    const onAdd = (counter) =>{
        setCounter(counter);
        addItem(item, counter);
    }

    return(
        <section>
            <div className="col-md-8 py-3">
                <div className="card card-detalles" >
                    <img src={item.pictureUrl} className="card-img-top card-img-detalles" alt={item.tittle} />
                    <div className="card-body">
                        <h5 className="card-title text-left"><b>{item.tittle}</b></h5>
                        <p className="card-text text-left"> {item.description}</p>
                        <p className="card-text text-left"> ${item.price}</p>
                        <p className="card-text text-left"> {item.detail}</p>
                    </div>
                    {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn fondo_naranja">Ir al Carrito</Link>}
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;