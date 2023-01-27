import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import './order-detail.css';           
function OrderDetail({product, restaStock, sumaStock, removeItem }) {  

  const onRemove = ()=>{      
    removeItem(product.id);            
  } 

  const onResta=()=>{
    if (product.cantidad-1 >= 1 ) {
    restaStock(product,product.cantidad-1)
    }
  }

  const onSuma=()=>{
    if ( product.cantidad+1 <= product.stock ) {
      sumaStock(product,product.cantidad+1)
    }
  }

  return (
    <div className="orderRow">            
      
      <div className='column1'>
        <button onClick={onRemove} className='botonEliminar'>
          <div className='centrado'>
            X
          </div>
        </button>
      </div>

      <div className='column2'>        
        <img src={product.imagen} alt={product.name}/> 
      </div>

      <div className='column3'>
        {product.name}
      </div>

      <div className='column4'>
        {product.offer || product.price}
      </div>

      <div className='column5'>
        <ItemCount stock={product.cantidad} restar={onResta} sumar={onSuma}/>
      </div>
      
      <div className='column6'>
        { (product.offer || product.price) * product.cantidad}
      </div>
    </div>     
  )  
};

export default OrderDetail;