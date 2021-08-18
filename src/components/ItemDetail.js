import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { Card, Col, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ initial, item }) => {   
    const [count, setCount] = useState(parseInt(initial));
    const [disponible] = useState(parseInt(item.stock));
    const [producto] = useState(item); 
    const [pedido, setPedido] = useState([
        {producto : { },
        cantidad : 0}
    ]);

    function onAdd(producto, cantidad) {
        console.log('producto',producto);
        console.log('cantidad',cantidad);
        setPedido([
            {producto : producto,
            cantidad : cantidad}]);       
        Swal.fire({
            title: 'Item Agregado',
            text: `Se agregaron ${cantidad} unid. de ${producto.title} a su carrito`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        document.getElementById('div-count').style.display = 'none'
        document.getElementById('div-terminar-compra').style.display = 'inline'
    }

    return (
        <>
        <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Card.Title>Información del Producto</Card.Title>
                        <Card.Text>
                            <span className="h3">{producto.title}</span>
                            <p>Descripción: {producto.description}</p>
                            <hr />
                            <p>Precio: $ {producto.price}</p>
                            <hr />
                            <div className="div-img-datos">
                            <img src={producto.pictureUrl} width="200" height="200" alt={producto.title} />
                            <br></br>
                            <div id="div-count" style={{'display':'inline','textAlign':'center'}}>
                                <ItemCount initial={1} item={producto} onAdd={onAdd}/>
                            </div>
                            <div id="div-terminar-compra" style={{'display':'none'}}>
                                <hr></hr>
                                <Button variant="warning"><NavLink to={ `/carrito` }><FontAwesomeIcon icon={faShoppingCart} />Termina tu Compra</NavLink></Button>
                                <br></br>
                            </div>
                            <hr></hr>
                            </div>                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>);

}

export default ItemDetail;