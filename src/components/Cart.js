import React, { useContext } from "react";
import ItemCart from "./ItemCart";
import { Container, Row, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items,clearAllItems } = useContext(CartContext);
  //console.log('contexto:',items);
  
  return (
    <div>
        <h3>Carrito de compras</h3>
        <button>Vaciar Carrito</button>
        <Container>
        <Row>
        {items.map((item)=>(
            <ItemCart key={item.item.id} item={item.item} cantidad={item.cantidad} />
           ))} 
           </Row>
      </Container>     
    </div>
  );
};

export default Cart;
