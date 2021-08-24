import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ item, cantidad }) => {
  console.log("producto", item);
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <img src={item.pictureUrl} width="50" height="50" alt={item.title} />
                {item.title} - cantidad: {cantidad} <Button>Eliminar</Button>             
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCart;
