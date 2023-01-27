import React from 'react';
import './add-cart.css';
import {useCartContext} from '../../context/CartContext.js'

const AddCart = ({producto,stock}) => {
  const {addItem} = useCartContext();

  const onAdd = ()=>{      
      addItem(producto,stock);            
    }
      

  return (
    <div className='itemAdd'>
      <button onClick={onAdd} > Agregar al carrito </button>      
    </div>  
  );
};

export default AddCart;
