import { listaOfertas } from "../mock/listaOfertas";

export const getItemId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {                                                //simulo una demora por parte del servidor de 2seg
            resolve(listaOfertas.find(o => o.id === id))      //si la promesa se resuelve correctamete devuelve la lista de ofertas
        }, 2000);
    })
}