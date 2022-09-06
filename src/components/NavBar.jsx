import React from "react";

/* items del navbar principales */
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

/* items del menu desplegable de las categorias del navbar */
class ItemsCategorias extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            categorias: ['Vehículos', 'Inmuebles', 'Supermercado', 'Tecnología', 'Hogar y Muebles', 'Electrodomésticos', 'Herramientas', 'Construcción', 'Deportes y Fitness', 'Accesorios para Vehículos', 'Moda', 'Juegos y Juguetes', 'Bebés', 'Belleza y Cuidado Personal', 'Salud y Equipamiento Médico', 'Industrias y Oficinas', 'Agro', 'Productos Sustentables', 'Servicios', 'Más vendidos', 'Tiendas oficiales', 'Ver más categorías']
        };
    }
        render() {
            const categorias = this.state.categorias.map(c =>(
                <li  className="dropdown-item"><a href=" ">{ c }</a></li>
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