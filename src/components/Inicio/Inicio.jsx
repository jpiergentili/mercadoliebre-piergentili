import React from "react";
import Carrusel from "../carrusel/Carrusel";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const nivelSeisQuick = "https://i.postimg.cc/wjxR5Ytv/image.png";
const mediospagoQuick = "https://i.postimg.cc/mgdz8pMS/image.png";

const Inicio = () =>{
    return (
        <>
            <section>
                <Carrusel />
            </section>

            <section>
                <div className="container">
                    <ItemListContainer />
                </div>
            </section>

            {/*  SECCION EN CONSTRUCCION SOLO PARA RELLENO DE LA PAGINA */}
            <section className="conteiner-fluid section-medios-pago">
                    <img src={mediospagoQuick} className="img-medios-pago" alt="medios-pago" />
            </section>

            {/* SECCION EN CONSTRUCCION SOLO PARA RELLENO DE LA PAGINA */}
            <section className="conteiner-fluid section-nivelseis">
                    <img src={nivelSeisQuick} className="img-nivelseis" alt="suscrip-nivelseis" />
            </section>
        </>
    )
}

export default Inicio;
