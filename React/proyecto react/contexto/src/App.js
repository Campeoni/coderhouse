import React from 'react';
import {CartProviedes} from './contexts/CartContext.js';
import Prueba from './components/Prueba.js'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <CartProviedes>
        <h1> prueba </h1>
        <Prueba />
      </CartProviedes>
    </div>
  );
}
export default App;
