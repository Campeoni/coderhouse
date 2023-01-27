import React, { useState } from 'react';
import '../../style.css';

const ContadorComp = () => {
  const [contador, setContador] = useState(0);
  const max = 8;
  const min = 0;


  return (
    <div className='contenedor'>
    
      <div  className='espacio'></div>
      <div className='contenedor1'>
        <button onClick={()=> setContador((contador===min)?0:contador-1)}>
          -
        </button>

        <p> Contador: {contador} </p>

        <button onClick={()=> setContador((contador<max)?contador+1:contador)}>
          +
        </button>
      </div>
      <div  className='espacio'></div>
    </div>
  );
};

export default ContadorComp;
