import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Card, Col, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import ItemCount from "./ItemCount";

const Item = ({ initial, mostrarCarrito, item }) => {
    const [count, setCount] = useState(parseInt(initial));
    const [disponible] = useState(parseInt(item.stock));
    const [producto] = useState(item);
    const [pedido, setPedido] = useState([
        {producto : { },
        cantidad : 0}
    ]);

    function onAdd(producto, cantidad) {
        setPedido([
            {producto : producto,
            cantidad : cantidad}]);
        Swal.fire({
          title: "Item Agregado",
          text: `Se agregaron ${cantidad} unid. de ${producto.title} a su carrito`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        mostrarCarrito(producto, cantidad);
      }

    return (
        <>
            <Col xs={3}>
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <NavLink to={ `/producto/${producto.id}` }><span className="h3">{producto.title}</span></NavLink>
                            <p>Precio: $ {producto.price}</p>
                            <hr />
                            <div className="div-img-datos">
                            <NavLink to={ `/producto/${producto.id}` }>
                            <img src={producto.pictureUrl} width="150" height="150" alt={producto.title} />
                            </NavLink>
                            <br></br>
                            <div id="div-count" style={{'display':'inline','textAlign':'center'}}>
                                <ItemCount initial={1} item={producto} onAdd={onAdd}/>
                            </div>
                            <hr></hr>
                            </div>  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Item;
