import React from "react";
const footer = "https://drive.google.com/uc?id=12OIMg9Zna75yFR5PUjCG0Wn-RouKIRhH"

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