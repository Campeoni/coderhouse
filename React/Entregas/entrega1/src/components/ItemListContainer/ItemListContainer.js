import React from 'react';
import './item-list-container.css';
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = ({products, categoria, loading}) => {  
  return (
    <div >     
      <ItemList items={products} titulo={categoria} loading={loading}/>
    </div>
  )
  }; 

export default ItemListContainer;