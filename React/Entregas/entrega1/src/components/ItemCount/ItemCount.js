import React  from 'react';
import './item-count.css';

const ItemCount = ({stock, restar, sumar}) => {
  return (
    <div className='itemCounter'>
      <button onClick={restar} > - </button>
      <div> {stock} </div>
      <button onClick={sumar}> + </button>
    </div>  
  );
};

export default ItemCount;
