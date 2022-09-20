import React from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Inicio";

import Login from "./NavCuenta/Login";
import MyShopping from "./NavCuenta/MyShopping";
import SignUp from "./NavCuenta/SignUp";

import nivelSeisQuick from "./images/suscripcion-nivelseis.png";
import mediospagoQuick from "./images/medios-pago.png";
import Productos from "./Productos";


const Main = () =>{

    return (
            <main>
                <section>
                    <Routes>
                        <Route exact path="/" element={<Inicio />} />
                        <Route path='/item/:id' element={<Productos />} />                        
                        <Route path='/category/:categoryId' element={<Productos />} />     
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/myshopping" element={<MyShopping />} />
                    </Routes>
                </section>

                {/*  SECCION EN CONSTRUCCION SOLO PARA RELLENO DE LA PAGINA */}
                <section className="conteiner-fluid section-medios-pago">
                        <img src={mediospagoQuick} className="img-medios-pago" alt="medios-pago" />
                </section>

                {/* SECCION EN CONSTRUCCION SOLO PARA RELLENO DE LA PAGINA */}
                <section className="conteiner-fluid section-nivelseis">
                        <img src={nivelSeisQuick} className="img-nivelseis" alt="suscrip-nivelseis" />
                </section>

            </main>
    )

}

export default Main;