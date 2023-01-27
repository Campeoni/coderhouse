import React, { useState } from 'react';

const Semaforo = () => {
  const [estado, setEstado] = useState(true);

  return (
    <div>
      <button onClick={()=> setEstado(!estado)}>
        Cambio de estado
      </button>
      <p>Estado: {(estado===true)?"encendido":"apagado"}</p>
    </div>
  );
};

export default Semaforo;
