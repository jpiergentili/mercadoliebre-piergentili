import React from "react";
import ItemsCategorias from "./ListCategorias";

class ItemsNav extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            masCategorias: ['Ofertas', 'Historial', 'Supermercado', 'Moda', 'Vender', 'Ayuda']
        };
    }
        render() {
            const masItemsCategorias = this.state.masCategorias.map(c =>(
                <li><a href=" ">{ c }</a></li>
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
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-bs-toggle="dropdown" href=" " role="button" aria-expanded="false">Categorías</a>
                        <ItemsCategorias />
                    </li>
                    <ItemsNav />
            </ul>
        </div>
    )
}

export default NavBar;