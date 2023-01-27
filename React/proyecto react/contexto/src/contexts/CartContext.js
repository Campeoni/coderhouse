import React, {useState, useContext} from 'react';

const CartContext = React.createContext();
const useCartContext = () => useContext(CartContext);

const CartProviedes = ({children}) => {

    const [cartItem, setCartItem] = useState(1);

    const sumarCarrito = () => {
        setCartItem(cartItem + 1)
    };

    const restarCarrito = () => {
        setCartItem(cartItem - 1)
    };

    return(
    <CartContext.Provider value={{cartItem, setCartItem, sumarCarrito, restarCarrito}}>
        {children} 
    </CartContext.Provider>
    )
}

export {CartProviedes, useCartContext} ;