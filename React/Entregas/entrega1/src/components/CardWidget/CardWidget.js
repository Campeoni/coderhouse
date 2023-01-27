import React from 'react';
import {useCartContext} from '../../context/CartContext.js';
import { Link } from 'react-router-dom';
import './card-widget.css';
const  bag = "../img/bag.png";

const CardWidget = () => {
  const {cartItem} = useCartContext();
  const url = "/Order";
  
  return (
    <div className='card-widget'>
      <Link to={url}>
        <img className='bag' src={bag} alt='bag' />
        <div className='count'>{cartItem.length}</div> 
      </Link>
    </div>
  );
};

export default CardWidget;
