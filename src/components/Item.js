import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Card, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

const Item = ({ mostrarCarrito, item }) => {
    const [producto] = useState(item);
    const { addItem } = useContext(CartContext);

    function onAdd(producto, cantidad) {
        addItem(producto,cantidad); //addItem este viene del context            
        Swal.fire({
            title: 'Item Agregado',
            text: `Se agregaron ${cantidad} unid. de ${producto.title} a su carrito`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        mostrarCarrito(producto, cantidad);
    };
    
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
                                <ItemCount initial={1} item={producto} onAdd={onAdd} />
                            </div>
                            <p>Disponibles: {producto.stock}</p>
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
