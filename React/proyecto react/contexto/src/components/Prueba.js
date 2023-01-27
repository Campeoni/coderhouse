import React  from "react";
import { useCartContext } from "../contexts/CartContext.js";

const Prueba = ()=>{
    
    const {cartItem, restarCarrito, sumarCarrito} = useCartContext();  
    
    const restar = ()=>{
        restarCarrito();
    }

    return (
        <div>
            <button onClick={restar}> Restar </button>
            <button onClick={sumarCarrito}> Sumar </button>
            <h1> {cartItem} </h1>
        </div>    
    )
}
export default Prueba;








