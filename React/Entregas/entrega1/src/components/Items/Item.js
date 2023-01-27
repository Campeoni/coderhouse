import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({item}) => {  
  const url = `/Item/${item.id}`;

  return (
    <div className='card'>      

      <Link to={url}>
        <img src= {item.imagen} alt={item.name}></img>
      </Link>  
      <div className='name'> {item.name} </div>
      <div className='category'> {item.categoryName} </div>
      <div className={`price ${item.offer && 'tachado'}`}> Precio $ {(item.price).toFixed(2)} </div>   
      {item.offer && <div className='price'> Oferta $ {(item.offer).toFixed(2)} </div> }  
      
    </div>
  )
};

export default Item;


