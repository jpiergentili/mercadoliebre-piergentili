import React from "react";
const footer = "https://postimg.cc/XXsJ1XZv"

const Footer = () =>{
    return (
        <footer className="container-fluid">
            <div className="row">
                <img src={footer} className="image-fluid footer-rapido" alt="footerRapido" />
                <p>ESTA PAGINA ES UNA CREACION PARA USO NETAMENTE ACADEMICO</p>
            </div>                       
        </footer>
    )
}

export default Footer;