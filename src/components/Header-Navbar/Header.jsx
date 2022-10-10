import React from "react";

import NavBar from "./NavBar";

import NavCuenta from "../NavCuenta/NavCuenta";


import CartWidget from "../CartWidget/CartWidget";

const logo = "https://drive.google.com/uc?id=1ZmMyQpnFX3omgA02u4Da0jdP1Vw9iELj";
const ImageUbic = "https://drive.google.com/uc?id=1bPNI8s7G2hr8mRpSq5zpcBtXnC9Y_tVF";
const ImageLvl6 = "https://drive.google.com/uc?id=1KBDfhXfHpaJS6AKXBwSpDjb9axQnzni2";

const Header = () => {
    return (
        <div className="container header-ppal">
            <div className="container header-sec">

                <div className="container header-container-logo">
                    <a className="row" href="/"><img id="logo-ppal"src={logo} alt="mercadoliebre" /></a>
                </div>

                <div className="header-container-browser">
                    <form action="">
                        <input type="text" placeholder="Busca productos, marcas y mas..." maxLength="120" />
                        <button className="header-search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" className="bi bi-search" ><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
                    </form>
                </div>

                <div className="header-container-promo">
                    <a className="row" href="..."><img id="image-temp-promolvl6" src={ImageLvl6} alt="promo-lvl6" /></a>
                </div>

                <div className="header-container-ubic">
                    <a className="row" href="..."><img id="image-temp-ubic" src={ImageUbic} alt="imagen-ubic" /></a>
                </div>

                <NavBar />

                <NavCuenta />

                <div className="header-container-carrito">
                   <CartWidget />
                </div>
                
            </div>
        </div>

    )
}

export default Header;