import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const ItemListContainer = ({ greeting }) => {
  
  function onAdd (producto,cantidad) {
    Swal.fire({
      title: 'Item Agregado',
      text: `Se agregaron ${cantidad} unid. de ${producto} a su carrito`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }

  return (
    <div>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {greeting}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>      
    </Container>
    <br></br>
    <ItemCount stock="5" initial="1" onAdd={onAdd} />
  </div>   
  );
};

export default ItemListContainer;