import React from "react";

const ItemListContainer = (props) =>{

    const listOfertas = props.ofertas.map(c =>(
        <h5 className="card-title">{ c }</h5>
    ));
    return (
        <>
        <h2>{props.greeting}</h2>
        <div>{listOfertas}</div>
        </>
    )
}

export default ItemListContainer;
