import React, { useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const Item = ({ stock, initial, onAdd, item }) => {
    const [count, setCount] = useState(parseInt(initial));
    const [disponible, setDisponible] = useState(parseInt(item.stock));
    const [producto, setProducto] = useState(item);

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
            <Col xs={3} key={producto.id}>
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <span className="h3">{producto.title}</span>
                            <p>{producto.description}</p>
                            <p>Precio: $ {producto.price}</p>
                            <hr />
                            <div className="div-img-datos">
                            <img src={producto.pictureUrl} width="150" height="150" />
                            <br></br>
                            <Button variant="primary" className="linea button" size="sm" onClick={decrementar}>-</Button>
                            <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />
                            <Button variant="primary" className="linea button" size="sm" onClick={incrementar}>+</Button>
                            <hr></hr>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant="primary" onClick={() => onAdd(producto.id,producto.title, count)}>Agregar</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Item;
