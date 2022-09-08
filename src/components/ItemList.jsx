import React from "react";
import Item from "./Item";

const ItemList = ({items}) =>{
    console.log(items);
    return(
        <div  className="row">
            {items.map(item => (
                <div key={item.id}>
                    <Item id={item.id} tittle={item.tittle} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;