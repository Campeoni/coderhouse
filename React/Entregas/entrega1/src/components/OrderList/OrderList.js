import React  from 'react';
import OrderDetail from '../OrderDetail/OrderDetail.js';
import { Link } from 'react-router-dom';
import './order-list.css';

function OrderList({products, restaStock, sumaStock, removeItem}) { 
  const url = "/Checkout";

  return (
    <div className="orderConteiner">
      <div className='orderRow'>
        <div className="column1 orderTitulos">
          x          
        </div>
        <div className="column2 orderTitulos">
          Imagen
        </div>
        <div className="column3 orderTitulos">
          Producto
        </div>
        <div className="column4 orderTitulos">
          Precio
        </div>
        <div className="column5 orderTitulos">
          Cantidad
        </div>
        <div className="column6 orderTitulos">
          Sub Total
        </div>
      </div>  
          
      {products.length > 0 
        ?
        <div className='orderDatos'> 
          <div className='orderContenido' > 
            {products.map((element)=>{
              return (
                <OrderDetail key={element.id} product={element} restaStock={restaStock} sumaStock={sumaStock} removeItem={removeItem} /> 
                
              )
            })}
          </div>
          <div className='orderfinalizar' > 
            <Link to={url}>              
              <button>
                finalizar compra 
              </button> 
            </Link>
          </div>
        </div>
        :  <div className='orderNoitems'> No hay ningun producto en tu carrito </div>          
         
      }
        
    </div>
    
  )  
};

export default OrderList;