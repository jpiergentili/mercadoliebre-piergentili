import React from "react";
import {Link} from "react-router-dom";

const NavCuenta = () => {
    return (
        <div className="row header-container-nav-cuenta">
            <ul className="navbar header-ul-nav-cuenta">
                <li>
                    <Link className="header-nav-link"  to="/signup">SIGN UP</Link>
                </li>
                <li>
                    <Link className="header-nav-link" to="/login">Ingresá</Link>
                </li>
                <li>
                    <Link className="header-nav-link" to="/myshopping">Mis compras</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavCuenta;