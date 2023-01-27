import React from 'react';
import './detalle-factura.css'

const DetalleFactura = ({form, changeHandler}) => {  

  const trigger = (ev) =>{    
    changeHandler(ev);
  } 

  return (  
    <div className='containerDetalleFactura'>        
      <div className='titulo'>
      Detalle de facturación
      </div>
      <div className='formulario'>           
        <form>
          <div className='nombreFlex'>
            <label htmlFor="name">Nombre</label>
            <input className='nombre'
              name="name"
              id="name"
              value={form.name}
              onChange={trigger}
            />
          </div>
          <div className='emailFlex'>
            <label htmlFor="email">Email</label>
            <input className='email'
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={trigger}
            />
          </div>
          <div className='mensaje'>
            <label htmlFor="message">Mensaje</label>
            <textarea 
              name="message"
              id="message"
              value={form.message}
              onChange={trigger}
            ></textarea>
          </div>          
        </form>
      </div>
    </div>        
  );
};

export default DetalleFactura;
