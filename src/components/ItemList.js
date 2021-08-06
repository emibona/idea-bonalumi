import React, { useState, useEffect } from "react";
import Item from './Item';
import productos from '../api/Productos';
import { Container,Row } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemList = () => {

    const [ResultProductos, setResultProductos] = useState([]);

    function onAdd(id, producto, cantidad) {
        Swal.fire({
            title: 'Item Agregado',
            text: `Se agregaron ${cantidad} unid. de ${producto} a su carrito`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

    const getProductos = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productos.length > 0) {
                    resolve(productos);
                } else {
                    reject('No se encontraron productos');
                }
            }, 2000);
        });

    useEffect(() => {
        getProductos().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {ResultProductos.map((producto) =>
                        <Item item={producto} onAdd={onAdd} initial={1} />
                    )}
                </Row>
            </Container>
        </div>
    );

}

export default ItemList;