import React  from 'react';
import './pedido-detail.css';


function PedidoDetail({item}) { 
  
  return (    
    <div className='itemsPedidoContainer'>
      <div className='itemName'>
        {item.name}  X {item.cantidad}
      </div>            
      <div className='itemSubtotal'>
        {((item.offer || item.price) * item.cantidad).toFixed(2)}
      </div>            
    </div>  
  )        
};

export default PedidoDetail;