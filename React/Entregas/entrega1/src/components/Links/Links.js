import React from 'react';
import './links.css';
import { Link } from 'react-router-dom';

const Links = ({vista,ruta}) => {
  return (
    <Link className='link' to={ruta}>
      {vista}
    </Link>
  );
};

export default Links;
