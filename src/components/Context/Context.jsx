import React from "react";

export const CartContext = React.createContext();

const Provider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    /* FUNCION PARA AGREGAR UN ITEM AL CARRITO */
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);            
        }
    }

    /* FUNCION PARA VACIAR EL CARRITO */
    const clear = () => {
        setCart([]);
    }

    const deleteOne = (id) =>{
        const productosFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(productosFiltrados)
    };

    /* FUNCION PARA DETECTAR SI LA ID DEL COMPONENTE BUSCADO YA SE ENCUENTRA EN EL ARRAY DEL CARRITO */
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    /* FUNCION PARA SUMAR TODOS LOS ITEMS AGREGADOS AL CARRITO Y OBTENER UN TOTAL */
    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    }

    const cartSuma = () =>{
        return cart.reduce((price, item) => price+=(item.price)*(item.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart, cartTotal, cartSuma, deleteOne}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;