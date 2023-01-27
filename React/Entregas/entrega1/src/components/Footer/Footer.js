import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='column1'>
          <h2> Redes Sociales </h2>
          <div className='redesSocieles'>
            <img className='facebook'  src='../img/facebook_logo.png' alt='facebook'/>
            <img className='instagram' src='../img/instagram_logo.png' alt='instagram'/>
          </div>

      </div>

      <div className='column2'>
          <h2> Direccion </h2>
          <div> Vicente Lopez 34 </div>
          <div> Provincia de Buenos Aires </div>
          <div> Tel: 02346-428858 </div>
      </div>
    </div>
  );
};

export default Footer;
