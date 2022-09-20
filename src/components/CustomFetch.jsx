import { listaProductos } from "../mock/listaProductos";

export const getItemId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {                                                //simulo una demora por parte del servidor de 2seg
            resolve(listaProductos.find(o => o.id === id))      //si la promesa se resuelve correctamete devuelve la lista de ofertas
        }, 2000);
    })
}

export const getItemsCategory = (cat) => {
    return new Promise(resolve => {
        setTimeout(() => {                                              
            resolve(listaProductos.filter(listaProductos => listaProductos.cat === cat)) 
        }, 2000);
    })
}