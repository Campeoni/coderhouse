import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import NavBar from './components/NavBar/NavBar.js'
import Ofertas from './routes/Ofertas/Ofertas.js'
import Categorias from './routes/Categorias/Categorias.js'
import CategoriasId from './routes/CategoriasId/CategoriasId.js'
import ItemId from './routes/ItemId/ItemId.js'
import QuienesSomos from './routes/QuienesSomos/QuienesSomos.js'
import FAQ from './routes/FAQ/FAQ.js'
import MiCuenta from './routes/MiCuenta/MiCuenta.js'
import Order from './routes/Order/Order.js'
import Checkout from './routes/Checkout/Checkout.js'
import {CartProviedes} from './context/CartContext.js'
import Error404 from './routes/Error404/Error404.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <BrowserRouter>
      <CartProviedes>
        <NavBar />
        <Routes>
          <Route exact path="/" element= {<Categorias />}/>
          <Route exact path="/Ofertas" element= {<Ofertas />}/>
          <Route exact path="/Categorias/:id" element= {<CategoriasId />}/>        
          <Route exact path="/Item/:id" element= {<ItemId />}/>        
          <Route exact path="/QuienesSomos" element= {<QuienesSomos />}/>
          <Route exact path="/FAQ" element= {<FAQ />}/>
          <Route exact path="/MiCuenta" element= {<MiCuenta />}/>
          <Route exact path="/Order" element= {<Order />}/>
          <Route exact path="/Checkout" element= {<Checkout />}/>          
          <Route path="*" element= {<Error404 />}/>
        </Routes>
      </CartProviedes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;