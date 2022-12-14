import React from "react";
import { Routes, Route } from 'react-router-dom';

import Inicio from "../Inicio/Inicio";
import ItemDetailContainer from "../ItemDetailsContainer/ItemDetailContainer";

import Login from "../NavCuenta/Login";
import MyShopping from "../NavCuenta/MyShopping";
import SignUp from "../NavCuenta/SignUp";

import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const Main = () =>{

    return (
            <main>
                    <Routes>
                            <Route exact path="/" element={<Inicio />} />
                            <Route path='/category/:categoryId' element={<Inicio />} />     
                            <Route path='/item/:id' element={<ItemDetailContainer />} />
                            
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/signup" element={<SignUp />} />
                            <Route exact path="/myshopping" element={<MyShopping />} />

                            <Route exact path="/cart" element={<Cart />} />
                            <Route exact path="/checkout" element={<Checkout />} />
                    </Routes>
            </main>
    )

}

export default Main;