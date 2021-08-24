import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemCount = ({ initial, item, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [disponible] = useState(parseInt(item.stock));
  //const [producto, setProducto] = useState(item);

  const incrementar = () => {
    if (count < disponible) {
      setCount(count + 1);
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
    } else {
      return false;
    }
  };

  return (
    <>
      <Button variant="primary" className="linea button" size="sm" onClick={decrementar}>-</Button>
      <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />
      <Button variant="primary" className="linea button" size="sm" onClick={incrementar}>+</Button>
      <hr></hr>
      <div style={{'textAlign':'center'}}>
        <Button variant="primary" className="button-detail" onClick={() => onAdd(item, count)}>Agregar</Button>
      </div>
    </>
  );
};

export default ItemCount;
