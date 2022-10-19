import React from "react";
const footer = "https://i.postimg.cc/SNhMsMkc/image.png"

//FOOTER EN CONSTRUCCION - POR EL MOMENTO SE EMPLEO UNA IMAGEN PARA DAR FORMA A LA PAGINA
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