import React from "react";
import footer from "../images/footer.png"

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