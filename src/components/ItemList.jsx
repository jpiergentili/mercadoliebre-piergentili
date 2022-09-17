import React from "react";
import Item from "./Item";
import {Link} from "react-router-dom";

const ItemList = ({items}) =>{

    return(
        <div className="centrar-objetos" >
            {items.map(item => (
                <Link key={item.id} to={"/ofertas/"+item.id} >
                    <Item  tittle={item.tittle} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
                </Link>)
            )}
        </div>
    )
}

export default ItemList;