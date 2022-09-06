import React from "react";

class ItemListContainer extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            ofertas: ['televisor', 'colchon', 'bicicleta', 'auriculares', 'filtro']
        };
    }
        render() {
            const listOfertas = this.state.ofertas.map(c =>(
                <h5 className="card-title">{ c }</h5>
            ));
            return (
                <div>{ listOfertas }</div>
            );
    }
}

export default ItemListContainer;
