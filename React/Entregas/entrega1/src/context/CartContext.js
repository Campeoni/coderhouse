import React, {useState, useContext} from 'react';

const CartContext = React.createContext([]);
const useCartContext = () => useContext(CartContext)

const CartProviedes = ({children}) => {

    const [cartItem, setCartItem] = useState([]);

    const addItem = (item, cantidad) => {
      if (isInCart(item.id)){
        setCartItem(cartItem.map(element =>{
          if (element.id === item.id){
            return {...element, cantidad: cantidad}                         
          } else {            
            return element;
          }
        }))
      } else {
        setCartItem([...cartItem, {...item, cantidad}])
      }       
    }; 

    const removeItem = (id) => {
        return setCartItem(cartItem.filter(product => product.id !== id ? true : false));
    }
    
    const clear = () => {
        setCartItem([]);
    };
    
    const isInCart = (id) => {
        return cartItem.find(product => product.id === id) ? true : false;
    };

    return(
      <CartContext.Provider value={{cartItem, setCartItem, addItem, removeItem, clear, isInCart}}>
        {children} 
      </CartContext.Provider>
    )
}

export {CartProviedes, useCartContext} ;