import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

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
                    <ItemCount stock={item.stock} initial={1} onAdd={0} />
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;