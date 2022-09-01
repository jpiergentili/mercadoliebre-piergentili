import React from "react";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.png";
import banner5 from "./images/banner5.png";
import banner6 from "./images/banner6.png";
import mediospagoQuick from "./images/medios-pago.png";

import nivelSeisQuick from "./images/suscripcion-nivelseis.png";
import ItemsListOfertas from "./ChildsMain/ItemListContainer";

const Main = () =>{
    return (
        <main>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={banner1} className="d-block w-100" alt="banner1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner2} className="d-block w-100" alt="banner2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner3} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner4} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner5} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner6} className="d-block w-100" alt="banner3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="conteiner-fluid section-medios-pago">
                    <img src={mediospagoQuick} className="img-medios-pago" alt="medios-pago" />
            </section>


            {/* DIV PARA ENTREGABLE N°3 - CREACION DE LISTA EN EL MAIN */}
            <section className="row section-ofertas">
                <div>
                    <ItemsListOfertas />
                </div>

            </section>

            <section className="conteiner-fluid section-nivelseis">
                    <img src={nivelSeisQuick} className="img-nivelseis" alt="suscrip-nivelseis" />
            </section>

        </main>
    )
}

export default Main;