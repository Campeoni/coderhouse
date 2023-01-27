import React, {useState} from 'react';
import './item-detail-container.css';
import ItemCount from '../ItemCount/ItemCount.js'
import AddCart from '../AddCart/AddCart.js'

const ItemDetailContainer = ({product}) => {
  const [counter, setCounter] = useState(1);
  
  const decrementarStock = ()=>{
    if (counter > 1 ) {
      setCounter(counter-1);
    }    
  }

  const incrementarStock = ()=>{   
    if ( counter < product.stock ) 
      setCounter(counter+1);    
  }

  return (
    <div className='contenedorDetail'>                  
      <img src= {product.imagen} alt={product.name}></img>
      <div className='detail'>
        <div className='name'>{product.name}</div>
        <div className={`price ${product.offer && 'tachado'}`}> Precio $ {product.price} </div>   
        {product.offer && <div className='price'> Oferta $ {product.offer} </div> }
        <div className='cantidad'>{`Disponibilidad: ${product.stock}`}</div>
        <ItemCount stock={counter} restar={decrementarStock} sumar={incrementarStock}></ItemCount>
        <AddCart producto={product} stock={counter}></AddCart>

        <p>{`categoria: ${product.categoryName}`}</p>
      </div>
    </div>
  )
}; 

export default ItemDetailContainer;