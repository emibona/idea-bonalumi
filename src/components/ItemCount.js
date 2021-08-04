import React, { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [disponible, setDisponible] = useState(parseInt(stock));
  const [producto, setProducto] = useState('AXE Marine 190 ml');

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
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "30%" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <span className="h3">{producto}</span>
                  <hr />
                  <Button variant="primary" className="linea button" size="sm" onClick={decrementar}>-</Button>
                  <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />
                  <Button variant="primary" className="linea button" size="sm" onClick={incrementar}>+</Button>
                  <hr></hr>
                  <div className="d-grid gap-2">
                  <Button variant="primary" onClick={() => onAdd(producto,count)}>Agregar</Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemCount;
