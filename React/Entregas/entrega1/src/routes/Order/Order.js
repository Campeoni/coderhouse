import React from 'react';
import {useCartContext} from '../../context/CartContext.js'
import OrderList from '../../components/OrderList/OrderList.js';


function Order() {  

  const {cartItem, addItem, removeItem} = useCartContext();  

  return (
    <>
      <OrderList products={cartItem} restaStock={addItem} sumaStock={addItem} removeItem={removeItem}/>    
    </>   
  )  
};

export default Order;