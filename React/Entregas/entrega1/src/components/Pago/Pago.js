import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./pago.css";
import DetalleFactura from "../../components/DetalleFactura/DetalleFactura";
import Pedido from "../../components/Pedido/Pedido";
import { useCartContext } from "../../context/CartContext.js";

function Pago() {
  const url = "/";
  const { clear, cartItem } = useCartContext();

  const [id, setId] = useState();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const formsCollection = collection(db, "orders");

    const totalCompra = cartItem
      .reduce((total, element) => {
        return total + (element.offer || element.price) * element.cantidad;
      }, 0)
      .toFixed(2);

    var order = {
      buyer: { ...form },
      cart: { products: { ...cartItem }, total: { totalCompra } },
    };
    addDoc(formsCollection, order).then((snapshot) => {
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setId(snapshot.id);
      clear();
    });
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {typeof id !== "undefined" ? (
        <div className="pagoRealizarPedido">
          <div className="volverEmpezar">
            <p>El Pedido ha finalizado correctamente.</p>
            <p>{`El ID de su compra es: ${id}`}</p>
            <Link to={url}>
              <button>Volver a empezar!</button>
            </Link>
          </div>
        </div>
      ) : cartItem.length > 0 ? (
        <div>
          <div className="pagoTitulo">Pago</div>
          <div className="pagoContainer">
            <div className="detalleFactura">
              <DetalleFactura form={form} changeHandler={changeHandler} />
            </div>
            <div className="pedido">
              <Pedido />
            </div>
          </div>
          <div className="pagoRealizarPedido">
            
            {(form.name.length > 0 && form.email.length > 0 && form.message.length > 0) && (
            <button onClick={submitHandler}>Realizar el pedido</button>
            )}
          </div>
        </div>
      ) : (
        <div className="noItemsPago">No hay items ó se perdio el hilo</div>
      )}
    </div>
  );
}

export default Pago;
