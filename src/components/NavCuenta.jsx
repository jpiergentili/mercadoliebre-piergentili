import React from "react";

const NavCuenta = () => {
    return (
        <div className="row header-container-nav-cuenta">
            <ul className="navbar header-ul-nav-cuenta">
                <li>
                    <a className="header-nav-link"  href="/signup">Creá tu cuenta</a>
                </li>
                <li>
                    <a className="header-nav-link" href="/login">Ingresá</a>
                </li>
                <li>
                    <a className="header-nav-link" href="/myshopping">Mis compras</a>
                </li>
            </ul>
        </div>
    )
}

export default NavCuenta;