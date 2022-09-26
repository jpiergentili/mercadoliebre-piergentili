import React from "react";
import {Link} from "react-router-dom";


/* items del navbar principales */
class ItemsNav extends React.Component{
    constructor (props){
        super(props);
        this.state = {

            Categorias: [{id:1, cat:'Televisores'},
                            {id:2, cat:'Colchones'},
                            {id:3, cat:'Bicicletas'},
                            {id:4, cat:'Auriculares'},
                            {id:5, cat:'Filtros'}]
        };
    }
        render() {

            const masItemsCategorias = this.state.Categorias.map(c =>(
                <li key={c.id}><Link to={"/category/"+c.cat} >{ c.cat }</Link></li>
            ));
            return (
                masItemsCategorias
            );
    }
}

const NavBar = () => {
    return (
        <div className="row header-container-nav-cat">
            <ul className="navbar header-ul-nav-cat">
                    <ItemsNav />
            </ul>
        </div>
    )
}

export default NavBar;