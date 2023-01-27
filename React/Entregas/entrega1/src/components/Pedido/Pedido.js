import React  from 'react';
import {useCartContext} from '../../context/CartContext'
import PedidoDetail from '../PedidoDetail/PedidoDetail.js'
import './pedido.css';


function Pedido() { 
  const {cartItem} = useCartContext();  
  return (
    <div className='pedidoContainer'>
      <div className='titulo'>
        Tu Pedido
      </div>
      <div className='itemsTituloContainer'>
              
        <div className='titulos'>
          Producto
        </div>

        <div className='total'>
          SubTotal
        </div>

      </div>
      
      {cartItem.map((item)=>{          
        return (          
          <PedidoDetail key={item.id} item={item} /> 
        )        
      }
      )}
      
      <div className='total'>
        {`Total= ${cartItem.reduce((total, element)=>{
          return total + ((element.offer ||element.price) * element.cantidad)
        },0).toFixed(2)}`}
      </div>
          
      
    </div>
  )  
};

export default Pedido;