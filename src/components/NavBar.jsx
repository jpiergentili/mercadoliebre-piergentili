import React from "react";
import {Link} from "react-router-dom";


/* items del navbar principales */
class ItemsNav extends React.Component{
    constructor (props){
        super(props);
        this.state = {

            masCategorias: [{id:1, cat:'Ofertas'},
                            {id:2, cat:'Historial'},
                            {id:3, cat:'Supermercado'},
                            {id:4, cat:'Moda'},
                            {id:5, cat:'Vender'},
                            {id:6, cat:'Ayuda'}]
        };
    }
        render() {
            const nroRandom = parseInt(Math.floor(Math.random()*6)+1);
            console.log(nroRandom);

            const masItemsCategorias = this.state.masCategorias.map(c =>(
                <li key={c.id}><Link to={`/ofertas/${nroRandom}`} >{ c.cat }</Link></li>
            ));
            return (
                masItemsCategorias
            );
    }
}

/* items del menu desplegable de las categorias del navbar */
class ItemsCategorias extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            categorias: [{id:1, cat:'Vehículos'},
                        {id:2,cat:'Inmuebles'},
                        {id:3, cat:'Supermercado'},
                        {id:4, cat:'Tecnología'},
                        {id:5, cat:'Hogar y Muebles'},
                        {id:6, cat: 'Electrodomésticos'},
                        {id:7, cat:'Herramientas'},
                        {id:8, cat:'Construcción'},
                        {id:9, cat:'Deportes y Fitness'},
                        {id:10, cat:'Accesorios para Vehículos'},
                        {id:11, cat:'Moda'},
                        {id:12, cat:'Juegos y Juguetes'},
                        {id:13, cat:'Bebés'},
                        {id:14, cat:'Belleza y Cuidado Personal'},
                        {id:15, cat:'Salud y Equipamiento Médico'},
                        {id:16, cat:'Industrias y Oficinas'},
                        {id:17, cat:'Agro'},
                        {id:18, cat:'Productos Sustentables'},
                        {id:19, cat:'Servicios'},
                        {id:20, cat:'Más vendidos'},
                        {id:21, cat:'Tiendas oficiales'},
                        {id:22, cat:'Ver más categorías'}]
        };
    }
        render() {
            const categorias = this.state.categorias.map(n =>(
                <li  className="dropdown-item" key={n.id}><a href=" " >{ n.cat }</a></li>
            ));
            return (
                <ul className="dropdown-menu" aria-labelledby="dLabel">{ categorias }</ul>
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