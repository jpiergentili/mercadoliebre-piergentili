import React from "react";
import Item from "./Item";
import {Link} from "react-router-dom";

const ItemList = ({items}) =>{

    return(
        <div className="row .row-cols-3 row-cols-md-5 g-4 ms-2" >
            {items.map(item => (
                <Link key={item.id} to={"/item/"+item.id} >
                    <Item  tittle={item.tittle} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
                </Link>)
            )}
        </div>
    )
}

export default ItemList;