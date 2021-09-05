import React, { useState,useContext } from "react";
import { Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown,faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";


const ItemCountMini = ({ initial, item }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [disponible] = useState(parseInt(item.stock));
  const { addItem, removeItem, removeItemCant } = useContext(CartContext);
 
  const incrementar = () => {
    if (count < disponible) {
      setCount(count + 1);
      addItem(item,1);      
    } else {
      Swal.fire({
        title: 'Disponible',
        text: 'Ha superado la cantidad disponible',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
      removeItemCant(item.id,1);
    } else {
      removeItem(item.id);
      return false;
    }
  };

  return (
    <>
      <FontAwesomeIcon icon={ faAngleDoubleDown } onClick={decrementar} size={'2x'} cursor={'pointer'}/>{" "}
      <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />{" "}
      <FontAwesomeIcon icon={ faAngleDoubleUp } onClick={incrementar} size={'2x'} cursor={'pointer'}/>
    </>
  );
};

export default ItemCountMini;
