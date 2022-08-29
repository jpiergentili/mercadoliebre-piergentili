import React from "react";
import logo from "./images/LOGO-JP.png";


const Header = () => {
    return (
        <div className="container ppal-header">
            <div className="container sec-header">
                <div className="container-nav-logo">
                    <a href="..."><img src={logo} width="134px" alt="mercadoliebre" /></a>
                </div>
                <div className="container-nav-browser">
                    <form action="">
                        <input type="text" placeholder="Busca productos, marcas y mas..." maxLength="120" autofocus="" autocapitalize="none" autocorrect="none" spellcheck="false" autocomplete="off" />
                        <button className="nav-search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-search" ><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
                    </form>
                </div>
                <div className="container-nav-promo">

                </div>
                <div className="container-nav-ubic">

                </div>
                <div className="container-nav-categorias">
                    <ul class="nav nav-categorias">
                            <li class="nav-item">
                                <a class="nav-link" href="...">Categorías</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Ofertas</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Historial</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Supermercado</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Moda</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Vender</a>
                            </li>
                            <li class="nav-item nav-item-categorias">
                                <a class="nav-link" href="...">Ayuda</a>
                            </li>
                        </ul>
                </div>
                <div className="container-nav-cuenta">
                    <ul class="nav nav-cuenta">
                            <li class="nav-item nav-item-cuenta">
                                <a class="nav-link"  href="...">Creá tu cuenta</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="...">Ingresá</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="...">Mis compras</a>
                            </li>
                        </ul>
                </div>
                <div className="container-nav-carrito">
                      
                </div>                   
            </div>
        </div>

    )
}

export default Header;