import React from "react";

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

export default ItemsCategorias;
