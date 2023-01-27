import React, {useEffect, useState} from 'react';
import Link from '../Links/Links.js';
import DataCategory from '../Data/Category.js';
import FetchCategories from '../Data/fetchCategories.js';
import './list-links.css';

const ListLinks = () => {
  
  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{        
    FetchCategories(DataCategory)          
      .then(res => {setCategorias(res)
      })

      return ()=>{}   
  }, []);


  return (
    <div className='list-links'>
      <Link ruta="/Ofertas" vista="Ofertas" />
      {categorias?.map((element)=> {
        const url = `/Categorias/${element.id}`;
        return(        
          <Link key={element.id} ruta={url}  vista={element.name} />        
        )
      })}   
      <Link ruta="/QuienesSomos" vista="Quienes Somos"/>            
      <Link ruta="/FAQ" vista="FAQ" />
      <Link ruta="/MiCuenta" vista="Mi Cuenta" />
    </div>
  ); 
};

export default ListLinks;
